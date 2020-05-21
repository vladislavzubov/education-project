const products = require('../app/controllers/products')
const auth = require('../app/controllers/auth')
const registration = require('../app/controllers/registration')
const info = require('../app/controllers/info')
const searchByEmail = require('../app/controllers/searchByEmail')
const authMiddleware = require('../app/middleware/auth')
const changePassword = require('../app/controllers/changePassword')
const cors = require('cors')

module.exports = (app) => {
  app.use(cors({ allowedHeaders: ['Content-Type', 'Authorization'] }))
  //products
  app.get('/products', authMiddleware, products.getAll)
  app.post('/products', authMiddleware, products.create)
  app.put('/products/:id', authMiddleware, products.update)
  app.delete('/products/:id', authMiddleware, products.remove)

  //auth
  app.post('/signin', auth.signIn)

  // registration
  app.post('/registration', registration.create)
  app.post('/refresh-tokens', auth.refreshTokens)

  // info
  app.get('/info-user', authMiddleware, info.infoUser)

  //serch by email

  app.post('/lost-password', searchByEmail.searchByEmail)

  //Change Password

  app.put('/change-password',authMiddleware, changePassword.changePassword)
}
