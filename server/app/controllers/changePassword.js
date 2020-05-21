const mongoose = require('mongoose')
const User = mongoose.model('User')
const { passwordCoding } = require('../helpers/passwordHelpers')

const changePassword = (req, res) => {
  const { password, key } = req.body

  const passwordCod = passwordCoding(password)

  User.findOneAndUpdate(
    { keyChangePasswor: key },
    { password: passwordCod, keyChangePasswor: undefined },
    { new: true }
  )
    .exec()
    .then((user) => res.json(user))
    .catch((err) => res.status(500).json({ message: err.message }))
}

module.exports = {
  changePassword,
}
