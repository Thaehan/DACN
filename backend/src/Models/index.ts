import dbConfig from '../Config/config'
import mongoose from 'mongoose'
import accountModel from './account.model'

mongoose.Promise = global.Promise
mongoose.set('useNewUrlParser', true)
mongoose.set('useFindAndModify', false)
mongoose.set('useCreateIndex', true)

export const url = dbConfig.url
export const mongoosee = mongoose
export const accounts = accountModel.accountModel(mongoose)

export default {
  mongoose: mongoose,
  url: url,
  accounts,
}
