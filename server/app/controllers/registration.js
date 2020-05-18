const mongoose = require('mongoose')
const User = mongoose.model('User')
const { passwordCoding } = require('../helpers/passwordHelpers')

const create = (req, res) => {
  const passwordUser = passwordCoding(req.body.password)

  const userObj = {
    email: req.body.email,
    password: passwordUser,
    age: req.body.age,
  }

  User.create(userObj)
    .then((createUser) => res.json(createUser))
    .catch((err) => res.status(500).json(err))
}

module.exports = {
  create,
}
