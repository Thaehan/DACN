module.exports = (app) => {
  const tutorials = require('../controllers/tutorial.controller.js')

  var router = require('express').Router()

  // Create a new Tutorial
  router.get('/', tutorials.findAll)

  app.use('/api/product_imports', router)
}
