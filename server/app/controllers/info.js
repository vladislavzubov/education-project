const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')
const { secret } = require('../../config/app').jwt

const User = mongoose.model('User')

const infoUser = (req, res) => {
  const { token } = req.body
  let payload

  try {
    payload = jwt.verify(token, secret)
    
    if (payload.type !== 'access') {
      res.status(401).json({
        message: 'Invalid tokenssss!',
      })
      return
    }

    User.findById(payload.userId, function (err, user) {
      if (err) {
        res.status(500).json({ message: 'Invalid server!' })
        return
      }
      if (user === 0) {
        res.status(404).json({ message: 'User not found!' })
        return
      }
      return res.json({
        token: token,
        name: user.name,
        email: user.email,
        age: user.age,
      })
    })
  } catch (e) {
    if (e instanceof jwt.TokenExpiredError) {
      res.status(400).json({ message: 'Token expired!', err: 987 })
      return
    } else if (e instanceof jwt.TokenExpiredError) {
      res.status(400).json({ message: 'Invalid token!' })
      return
    }
  }

  // Token.findOne({ tokenId: payload.id })
  //   .exec()
  //   .then((token) => {
  //     if (token === null) {
  //       throw new Error('Invalid token!')
  //     }
  //     return updateTokens(token.userId)
  //   })
  //   .then((tokens) => res.json(tokens))
  //   .catch((err) => res.status(400).json({ message: err.message }))
}

module.exports = {
  infoUser,
}
