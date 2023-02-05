const User = require('../models/User.model')
const mongoose = require('mongoose')
const bcrypt = require("bcrypt");



module.exports.create = (req, res, next) => {
  res.render('users/new')
}

module.exports.doCreate = (req, res,next) => {
  User.create(req.body)
  .then(() => {
    res.redirect('/users/new')
  })
  .catch(next)
}