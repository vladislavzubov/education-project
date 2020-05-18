const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')

const Token = mongoose.model('Token')

const infoUser = (req, res) => {
  const { token } = req.body
  let payload
  console.log(payload);
  
  try {
    payload = jwt.verify(token)

    // console.log(payload)

    if (payload.type !== 'refresh') {
      res.status(400).json({ message: 'Invalid token!' })
      return
    }
  } catch (e) {
    if (e instanceof jwt.TokenExpiredError) {
      res.status(400).json({ message: 'Token expired!' })
      return
    } else if (e instanceof jwt.TokenExpiredError) {
      res.status(400).json({ message: 'Invalid token!' })
      return
    }
  }

  Token.findOne({ tokenId: payload.id })
    .exec()
    .then((token) => {
      if (token === null) {
        throw new Error('Invalid token!')
      }
      return updateTokens(token.userId)
    })
    .then((tokens) => res.json(tokens))
    .catch((err) => res.status(400).json({ message: err.message }))
}

module.exports = {
  infoUser,
}
