const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')
const User = mongoose.model('User')

const searchByEmail = (req, res) => {
  const { email } = req.body
  User.findOne({ email: email })
    .exec()
    .then((user) => {
      if (!user) {
        res.status(401).json({ message: 'User with this email was not found!' })
      } else {
        res.status(200).json({ message: `Password was sent to ${email}` })
      }
    })
    .catch((err) => res.status(500).json({ message: err.message }))
}

module.exports = {
  searchByEmail,
}
