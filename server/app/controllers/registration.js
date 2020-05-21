const mongoose = require('mongoose')
const User = mongoose.model('User')
const { passwordCoding } = require('../helpers/passwordHelpers')

const create = async (req, res) => {
  const verificationOfUserData = await verificationfUserData(req.body)

  if (!verificationOfUserData) {
    const passwordUser = passwordCoding(req.body.password)

    const userObj = {
      name: req.body.name,
      email: req.body.email,
      password: passwordUser,
      age: req.body.age,
    }

    User.create(userObj)
      .then((createUser) => res.json(createUser))
      .catch((err) => res.status(500).json(err))
  } else {
    res.status(404).json({ message: 'A user with this data already exists ' })
  }
}

const verificationfUserData = async (body) => {
  const { email, name } = body

  const res = await User.exists({ $or: [{ email: email }, { name: name }] })

  return res
}

module.exports = {
  create,
}
