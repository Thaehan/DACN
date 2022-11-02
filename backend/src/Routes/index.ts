import { Express } from 'express'

import accountRoutes from './account.routes'

const setRoutes = (app: Express) => {
  //Declare all routes
  accountRoutes(app)
}

export { setRoutes }
