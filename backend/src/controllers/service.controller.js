const { Schema, Model } = require('mongoose')
const db = require('../models')
const Service = db.services

exports.createAsync = async (req, res) => {
  try {
  } catch (error) {
    console.error(error)
    res.status(400).send({ message: error })
  }
}

exports.getAllAsync = async (req, res) => {
  try {
  } catch (error) {
    console.error(error)
    res.status(400).send({ message: error })
  }
}
