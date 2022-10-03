const { Types, Schema } = require('mongoose')

const productImportSchema = new Schema(
  {
    product: {
      type: [
        { productId: Types.ObjectId, quantity: Number, import_price: Number },
      ],
    },
  },
  {
    timestamps: true,
  }
)

const productImportModel = (mongoose) => {
  productImportSchema.method('toJSON', function () {
    const { __v, _id, ...object } = this.toObject()
    object.id = _id
    return object
  })

  const ProductImport = mongoose.model('productImport', productImportSchema)
  return ProductImport
}

module.exports = { productImportSchema, productImportModel }
