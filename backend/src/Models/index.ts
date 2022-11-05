import dbConfig from '../Config/config'
import mongoose from 'mongoose'
import accountModel from './account.model'

mongoose.Promise = global.Promise

export const url = dbConfig.url
export const mongoosee = mongoose
export const accounts = accountModel.accountModel(mongoose)

export default {
  mongoose: mongoose,
  url: url,
  accounts,
}
