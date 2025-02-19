import { Injectable } from '@nestjs/common'
import { SystemDatabase } from 'src/system-database'
import { User, UserWithProfile } from './entities/user'
import { ObjectId } from 'mongodb'

@Injectable()
export class UserService {
  private readonly db = SystemDatabase.db

  async create(data: Partial<User>) {
    const res = await this.db.collection<User>('User').insertOne({
      username: data.username,
      email: data.email,
      phone: data.phone,
      createdAt: new Date(),
      updatedAt: new Date(),
    })

    return await this.findOneById(res.insertedId)
  }

  async findOneById(id: ObjectId) {
    return this.db
      .collection<User>('User')
      .aggregate<UserWithProfile>()
      .match({ _id: id })
      .lookup({
        from: 'UserProfile',
        localField: '_id',
        foreignField: 'uid',
        as: 'profile',
      })
      .unwind({ path: '$profile', preserveNullAndEmptyArrays: true })
      .next()
  }

  async findOneByUsername(username: string) {
    return this.db.collection<User>('User').findOne({ username })
  }

  // find user by phone
  async findOneByPhone(phone: string) {
    const user = await this.db.collection<User>('User').findOne({
      phone,
    })

    return user
  }

  // find user by username | phone | email
  async findOneByUsernameOrPhoneOrEmail(key: string) {
    // match either username or phone or email
    const user = await this.db.collection<User>('User').findOne({
      $or: [{ username: key }, { phone: key }, { email: key }],
    })

    return user
  }

  async updateUser(id: ObjectId, data: Partial<User>) {
    await this.db
      .collection<User>('User')
      .updateOne({ _id: id }, { $set: data })

    return await this.findOneById(id)
  }
}
