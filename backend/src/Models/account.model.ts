import { Mongoose, Schema, Types } from 'mongoose'

import { IAccount } from '../Types/IAccount'

const accountSchema = new Schema<IAccount>(
  {
    username: { type: String, required: true, min: 6, max: 16 },
    password: { type: String, required: true, min: 8, max: 16 },
    role: {
      type: String,
      enum: ['admin', 'teacher', 'student'],
      required: true,
    },
    major_id: { type: String },
  },
  {
    timestamps: true,
  }
)

const accountModel = (mongoose: Mongoose) => {
  accountSchema.method('toJSON', function () {
    const { __v, _id, ...object } = this.toObject()
    object.id = _id
    return object
  })

  const Account = mongoose.model('account', accountSchema)
  return Account
}

export default {
  accountModel,
  accountSchema,
}
