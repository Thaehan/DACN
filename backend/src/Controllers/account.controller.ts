import { Request, Response } from 'express'
import { hash, compare } from 'bcrypt'

import { hashSaltRound } from '../Config/config'
import db from '../Models'
import { IAccount } from '../Types'

const Account = db.accounts

const createAsync = async (req: Request, res: Response) => {
  try {
    const { username, password, role } = req.body
    if (!username || !password || !role) {
      return
    }

    const data: IAccount = {
      username: req.body.username,
      password: await hash(req.body.password, hashSaltRound),
      role: req.body.role,
    }
    const newAccount = new Account(data)

    await newAccount.save()
    res.status(200).send({ result: data })
  } catch (error) {
    res.status(400).send({ message: error })
  }
}

const validatePasswordAsync = async (req: Request, res: Response) => {
  try {
    const username = req.query.username?.toString()
    const password = req.query.password?.toString()
    if (!username || !password) {
      return
    }

    const storedUser = await Account.findOne({ username: username })
    if (!storedUser) {
      res.status(400).send({ message: 'Username is not exist!' })
      return
    }
    const isLogin = await compare(password, storedUser.password)
    res.status(200).send({ valid: isLogin })
  } catch (error) {
    res.status(400).send({ message: error })
  }
}

const getAllAsync = async (req: Request, res: Response) => {
  try {
    const result = await Account.find({})
    res.status(200).send({ data: result })
  } catch (error) {
    res.status(400).send({ message: error })
  }
}

export default {
  createAsync,
  getAllAsync,
  validatePasswordAsync,
}
