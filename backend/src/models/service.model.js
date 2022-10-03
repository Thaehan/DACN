const { Schema } = require('mongoose')

const serviceSchema = new Schema({
  name: {
    type: String,
    enum: [
      'hair_cut',
      'head_washing',
      'massage',
      'hair_dying',
      'hair_curling',
      'hair_care',
    ],
    required: true,
  },
  price: { type: Number, required: true },
  description: { type: String, default: '' },
})

const serviceModel = (mongoose) => {
  serviceSchema.method('toJSON', function () {
    const { __v, _id, ...object } = this.toObject()
    object.id = _id
    return object
  })

  const Service = mongoose.model('service', serviceSchema)
  return Service
}

module.exports = { serviceSchema, serviceModel }
