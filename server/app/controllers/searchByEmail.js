const mongoose = require('mongoose')
const User = mongoose.model('User')
const { sendEmail } = require('./sendEmail')
const { passwordCoding } = require('../helpers/passwordHelpers')

const searchByEmail = (req, res) => {
  const { email } = req.body
  const key = passwordCoding(email)
  const site = 'http://localhost:3000/change-password'
  const link = `${site}?key=${key}`

  putKeyInUser(key, email)

  User.findOne({ email: email })
    .exec()
    .then(async (user) => {
      if (!user) {
        res.status(404).json({ message: 'User with this email was not found!' })
      } else {
        const result = await sendEmail({
          email,
          body: `
          Hellow
          follow the link to change the password on the site mysite.com
          if you are not registered on this site, ignore this message
          thank
          ${link} 
          `,
        })
        res.json(result)
        res.status(200).json({ message: `Link sent to email ${email}` })
      }
    })
    .catch((err) => res.status(500).json({ message: err.message }))
}
const putKeyInUser = (key, email) => {
  User.findOneAndUpdate(
    { email: email },
    { keyChangePasswor: key },
    { new: true }
  )
    .exec()
    .then((user) => res.json(user))
    .catch((err) => res.status(500).json({ message: err.message }))
}

module.exports = {
  searchByEmail,
}
