const { Types, Schema } = require('mongoose')

const productSchema = new Schema({
  name: { type: String, required: true },
  category: {
    type: String,
    enum: ['sampoo', 'hair_lotion', 'conditioner', 'dye', 'hair_spray', 'perm'],
  },
  quanity_in_stock: { type: Number, required: true },
  price: { type: Number, required: true },
  image: { type: String, default: null },
  description: { type: String, default: '' },
})

const productModel = (mongoose) => {
  productSchema.method('toJSON', function () {
    const { __v, _id, ...object } = this.toObject()
    object.id = _id
    return object
  })

  const Product = mongoose.model('product', productSchema)
  return Product
}

module.exports = { productSchema, productModel }
