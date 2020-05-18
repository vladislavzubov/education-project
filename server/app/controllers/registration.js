const mongoose = require('mongoose')
const User = mongoose.model('User')

const create = (req, res) => {
  User.create(req.body)
    .then((createUser) => res.json(createUser))
    .catch((err) => res.status(500).json(err))
}

module.exports = {
  create,
}
