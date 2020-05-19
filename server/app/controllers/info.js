const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')
const { secret } = require('../../config/app').jwt

// const Token = mongoose.model('Token')

const infoUser = (req, res) => {
  const { token } = req.body
  let payload = jwt.verify(token, secret)
  

  // try {
  //   payload = jwt.verify(token)
  //   res.json({ token })

  //   if (payload.type !== 'refresh') {
  //     res.status(400).json({ message: 'Invalid token!' })
  //     return res.json({ token })
  //   }
  // } catch (e) {
  //   if (e instanceof jwt.TokenExpiredError) {
  //     res.status(400).json({ message: 'Token expired!' })
  //     return res.json({ token })
  //   } else if (e instanceof jwt.TokenExpiredError) {
  //     res.status(400).json({ message: 'Invalid token!' })
  //     return res.json({ token })
  //   }
  // }
  return res.json({
    token,
    payload: payload,
  })

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
