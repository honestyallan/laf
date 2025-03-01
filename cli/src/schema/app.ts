import * as path from 'path'
import { APP_SCHEMA_NAME, DEBUG_TOKEN_EXPIRE, STORAGE_TOKEN_EXPIRE } from '../common/constant'
import { getAppPath } from '../util/sys'
import { exist, loadYamlFile, writeYamlFile } from '../util/file'
import { applicationControllerFindOne } from '../api/v1/application'

export class AppSchema {
  name: string
  appid: string
  invokeUrl?: string
  function?: {
    debugToken?: string
    debugTokenExpire?: number
  }
  storage?: {
    endpoint: string
    accessKeyId: string
    accessKeySecret: string
    sessionToken?: string
    expire: number
  }

  static read(): AppSchema {
    const configPath = path.join(getAppPath(), APP_SCHEMA_NAME)
    return loadYamlFile(configPath)
  }

  static write(schema: AppSchema): void {
    const configPath = path.join(getAppPath(), APP_SCHEMA_NAME)
    return writeYamlFile(configPath, schema)
  }

  static exist(): boolean {
    const configPath = path.join(getAppPath(), APP_SCHEMA_NAME)
    return exist(configPath)
  }

  static async refresh() {
    const appSchema = this.read()
    const app = await applicationControllerFindOne(appSchema.appid)
    let timestamp = Date.parse(new Date().toString()) / 1000

    appSchema.function = {
      debugToken: app.function_debug_token,
      debugTokenExpire: timestamp + DEBUG_TOKEN_EXPIRE,
    }

    appSchema.storage = {
      endpoint: app.storage.credentials.endpoint,
      accessKeyId: app.storage.credentials.accessKeyId,
      accessKeySecret: app.storage.credentials.secretAccessKey,
      sessionToken: app.storage.credentials.sessionToken,
      expire: timestamp + STORAGE_TOKEN_EXPIRE,
    }

    this.write(appSchema)
  }
}
