import { Mongoose, Schema, Types } from 'mongoose'

import { IAccount } from '../Types/IAccount'

const studentSchema = new Schema<IAccount>(
  {
    user_id: { type: Types.ObjectId, required: true },
    administrativeInfo: {
      first_name: { type: String, required: true },
      last_name: { type: String, required: true },
      birthday: { type: Date, required: true },
      gender: { type: String, enum: ['Male', 'Female'], required: true },
      email: { type: String, required: true },
      phone_number: { type: String, required: true },
      identification_number: { type: String, required: true },
    },
    classes: [
      {
        class_id: { type: Types.ObjectId, required: true },
        regular_point: [{ type: Number, required: true }],
        midterm_point: { type: Number, required: true },
        final_point: { type: Number, required: true },
      },
    ],
  },
  {
    timestamps: true,
  }
)

const studentModel = (mongoose: Mongoose) => {
  studentSchema.method('toJSON', function () {
    const { __v, _id, ...object } = this.toObject()
    object.id = _id
    return object
  })

  const Student = mongoose.model('student', studentSchema)
  return Student
}

export default {
  studentModel,
  studentSchema,
}
