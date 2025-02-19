import { Injectable, Logger } from '@nestjs/common'
import { Cron, CronExpression } from '@nestjs/schedule'
import { Application } from 'src/application/entities/application'
import { ServerConfig, TASK_LOCK_INIT_TIME } from 'src/constants'
import { SystemDatabase } from 'src/system-database'
import {
  ApplicationBilling,
  ApplicationBillingState,
} from './entities/application-billing'
import { MeteringDatabase } from './metering-database'
import { CalculatePriceDto } from './dto/calculate-price.dto'
import { BillingService } from './billing.service'
import { ApplicationBundle } from 'src/application/entities/application-bundle'

@Injectable()
export class BillingCreationTaskService {
  private readonly logger = new Logger(BillingCreationTaskService.name)
  private readonly lockTimeout = 60 * 60 // in second

  constructor(private readonly billing: BillingService) {}

  /**
   * Cron job method that runs every 10 minute
   */
  @Cron(CronExpression.EVERY_30_MINUTES)
  async tick() {
    // If billing creation task is disabled, return
    if (ServerConfig.DISABLED_BILLING_CREATION_TASK) {
      return
    }

    // Handle application billing creation
    try {
      this.logger.debug('Start handling application billing creation')
      await this.handleApplicationBillingCreating()
    } catch (err) {
      this.logger.error(
        'Error occurred while handling application billing creation',
        err,
        err.stack,
      )
    }
  }

  private async handleApplicationBillingCreating() {
    const db = SystemDatabase.db

    const res = await db
      .collection<Application>('Application')
      .findOneAndUpdate(
        {
          billingLockedAt: {
            $lt: new Date(Date.now() - 1000 * this.lockTimeout),
          },
        },
        { $set: { billingLockedAt: this.getHourTime() } },
      )

    if (!res.value) {
      this.logger.log('No application found for billing')
      return
    }

    const app = res.value
    this.logger.debug(`Application found for billing: ${app.appid}`)

    const billingTime = await this.createApplicationBilling(app)
    if (!billingTime) {
      this.logger.warn(`No billing time found for application: ${app.appid}`)
      return
    }

    // unlock billing if billing time is not the latest
    if (Date.now() - billingTime.getTime() > 1000 * this.lockTimeout) {
      this.logger.warn(
        `Unlocking billing for application: ${app.appid} since billing time is not the latest`,
      )

      await db
        .collection<Application>('Application')
        .updateOne(
          { appid: app.appid },
          { $set: { billingLockedAt: TASK_LOCK_INIT_TIME } },
        )
    }

    this.handleApplicationBillingCreating().catch((err) => {
      this.logger.error(
        'handleApplicationBillingCreating recursive error',
        err,
        err.stack,
      )
    })
  }

  private async createApplicationBilling(app: Application) {
    this.logger.debug(`Start creating billing for application: ${app.appid}`)

    const appid = app.appid
    const db = SystemDatabase.db

    // determine latest billing time & next metering time
    const latestBillingTime = await this.getLatestBillingTime(appid)
    const nextMeteringTime = await this.determineNextMeteringTime(
      appid,
      latestBillingTime,
    )

    if (!nextMeteringTime) {
      this.logger.warn(`No next metering time for application: ${appid}`)
      return
    }

    // lookup metering data
    const meteringData = await MeteringDatabase.db
      .collection('metering')
      .find({ category: appid, time: nextMeteringTime }, { sort: { time: 1 } })
      .toArray()

    if (meteringData.length === 0) {
      this.logger.log(`No metering data found for application: ${appid}`)
      return
    }

    // get application bundle
    const bundle = await db
      .collection<ApplicationBundle>('ApplicationBundle')
      .findOne({ appid: app.appid })

    if (!bundle) {
      this.logger.warn(`No bundle found for application: ${appid}`)
      return
    }

    // calculate billing price
    const priceInput = this.buildCalculatePriceInput(app, meteringData, bundle)
    const priceResult = await this.billing.calculatePrice(priceInput)

    // free trial
    if (bundle.isTrialTier) {
      priceResult.total = 0
    }

    // create billing
    await db.collection<ApplicationBilling>('ApplicationBilling').insertOne({
      appid,
      state:
        priceResult.total === 0
          ? ApplicationBillingState.Done
          : ApplicationBillingState.Pending,
      amount: priceResult.total,
      detail: {
        cpu: {
          usage: priceInput.cpu,
          amount: priceResult.cpu,
        },
        memory: {
          usage: priceInput.memory,
          amount: priceResult.memory,
        },
        databaseCapacity: {
          usage: priceInput.databaseCapacity,
          amount: priceResult.databaseCapacity,
        },
        storageCapacity: {
          usage: priceInput.storageCapacity,
          amount: priceResult.storageCapacity,
        },
      },
      startAt: new Date(nextMeteringTime.getTime() - 1000 * 60 * 60),
      endAt: nextMeteringTime,
      lockedAt: TASK_LOCK_INIT_TIME,
      createdAt: new Date(),
      updatedAt: new Date(),
      createdBy: app.createdBy,
    })

    this.logger.debug(`Billing creation complete for application: ${appid}`)
    return nextMeteringTime
  }

  private buildCalculatePriceInput(
    app: Application,
    meteringData: any[],
    bundle: ApplicationBundle,
  ) {
    const dto = new CalculatePriceDto()
    dto.regionId = app.regionId.toString()
    dto.cpu = 0
    dto.memory = 0
    dto.storageCapacity = 0
    dto.databaseCapacity = 0

    for (const item of meteringData) {
      if (item.property === 'cpu') dto.cpu = item.value
      if (item.property === 'memory') dto.memory = item.value
    }

    dto.storageCapacity = bundle.resource.storageCapacity
    dto.databaseCapacity = bundle.resource.databaseCapacity

    return dto
  }

  private async determineNextMeteringTime(
    appid: string,
    latestBillingTime: Date,
  ) {
    const db = MeteringDatabase.db
    const nextMeteringData = await db
      .collection('metering')
      .findOne(
        { category: appid, time: { $gt: latestBillingTime } },
        { sort: { time: 1 } },
      )

    if (!nextMeteringData) {
      this.logger.debug(`No next metering data for application: ${appid}`)
      return null
    }

    return nextMeteringData.time as Date
  }

  private async getLatestBillingTime(appid: string) {
    const db = SystemDatabase.db

    // get latest billing
    // TODO: perf issue?
    const latestBilling = await db
      .collection<ApplicationBilling>('ApplicationBilling')
      .findOne({ appid }, { sort: { endAt: -1 } })

    if (latestBilling) {
      this.logger.log(`Found latest billing record for application: ${appid}`)
      return latestBilling.endAt
    }

    this.logger.debug(
      `No previous billing record, setting latest time to last hour for application: ${appid}`,
    )

    const latestTime = this.getHourTime()
    latestTime.setHours(latestTime.getHours() - 1)

    return latestTime
  }

  private getHourTime() {
    const latestTime = new Date()
    latestTime.setMinutes(0)
    latestTime.setSeconds(0)
    latestTime.setMilliseconds(0)
    return latestTime
  }
}
