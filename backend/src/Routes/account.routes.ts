import express, { Express } from 'express'

import accountController from '../Controllers/account.controller'

const accountRoutes = (app: Express) => {
  const router = express.Router()

  router.post('/', accountController.createAsync)

  router.get('/', accountController.getAllAsync)

  router.get('/validate', accountController.validatePasswordAsync)

  app.use('/api/accounts', router)
}

export default accountRoutes
