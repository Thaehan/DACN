const { Types, Schema } = require('mongoose')

const transactionSchema = new Schema(
  {
    service_ids: { type: [Types.ObjectId], required: true },
    sale_ids: { type: [Types.ObjectId], required: true },
  },
  {
    timestamps: true,
  }
)

const transactionModel = (mongoose) => {
  transactionSchema.method('toJSON', function () {
    const { __v, _id, ...object } = this.toObject()
    object.id = _id
    return object
  })

  const Transaction = mongoose.model('transaction', transactionSchema)
  return Transaction
}

module.exports = { transactionModel, transactionSchema }
