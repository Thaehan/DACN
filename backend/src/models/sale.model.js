const { Types, Schema } = require('mongoose')

const saleSchema = new Schema(
  {
    product_id: { type: Types.ObjectId, required: true },
    number_of_product: { type: Number, required: true },
    price: { type: Number, required: true },
  },
  {
    timestamps: true,
  }
)

const saleModel = (mongoose) => {
  saleSchema.method('toJSON', function () {
    const { __v, _id, ...object } = this.toObject()
    object.id = _id
    return object
  })

  const Sale = mongoose.model('sale', saleSchema)
  return Sale
}

module.exports = { saleSchema, saleModel }
