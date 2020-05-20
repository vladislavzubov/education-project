const mongoose = require('mongoose')
const User = mongoose.model('User')

const updateUserInfo = async (req, res) => {
    const verificationOfUserData = await verificationfUserData(req.body)

  if (!verificationOfUserData) {
    User.findByIdAndUpdate(
      res.locals.userId,
      req.body,
      { new: true },
      function (err, user) {
        if (err) {
          res.status(500).json({ message: 'Invalid server!' })
          return
        }
        if (user === 0) {
          res.status(404).json({ message: 'User not found!' })
          return
        }
        return res.json({
          name: user.name,
          email: user.email,
          age: user.age,
        })
      }
    )
  } else {
    res
      .status(404)
      .json({ message: 'A user with the same name or email already exists' })
  }
}

const verificationfUserData = async (body) => {
  const { email, name } = body

  const res = await User.exists({ $or: [{ email: email }, { name: name }] })

  return res
}

module.exports = {
  updateUserInfo,
}
