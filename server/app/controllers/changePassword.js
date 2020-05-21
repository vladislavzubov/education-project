const mongoose = require('mongoose')
const User = mongoose.model('User')
const { passwordCoding } = require('../helpers/passwordHelpers')

const changePassword = (req, res) => {
  const userId = res.locals.userId
  const { password } = req.body
  const passwordCod = passwordCoding(password)

  User.findOneAndUpdate(
    { _id: userId },
    { password: passwordCod },
    { new: true }
  )
    .exec()
    .then((user) => res.json(user))
    .catch((err) => res.status(500).json({ message: err.message }))
}

module.exports = {
  changePassword,
}
