const md5 = require('md5')

const passwordCoding = (password) => {
  return (password = md5(password))
}

const passwordCompare = (passwordServer, passwordUser) => {
  return (resolveCompare = passwordServer === passwordUser)
}

module.exports = {
  passwordCoding,
  passwordCompare,
}
