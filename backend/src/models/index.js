const dbConfig = require('../config/config.js')
const mongoose = require('mongoose')

mongoose.Promise = global.Promise
mongoose.set('useNewUrlParser', true)
mongoose.set('useFindAndModify', false)
mongoose.set('useCreateIndex', true)

const db = {}
db.mongoose = mongoose
db.url = dbConfig.url
db.tutorials = require('./tutorial.model.js').tutorialModel(mongoose)
db.products = require('./product.model').productModel(mongoose)
db.productImports = require('./productImport.model').productImportModel(
  mongoose
)
db.sales = require('./sale.model').saleModel(mongoose)
db.services = require('./service.model').serviceModel(mongoose)
db.transactions = require('./transaction.model').transactionModel(mongoose)

module.exports = db
