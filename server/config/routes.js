const products = require('../app/controllers/products')
const auth = require('../app/controllers/auth')
const registration = require('../app/controllers/registration')
const info = require('../app/controllers/info')
const searchByEmail = require('../app/controllers/searchByEmail')
const updateUserInfo = require('../app/controllers/updateUserInfo')
const authMiddleware = require('../app/middleware/auth')

module.exports = (app) => {
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

  //update user info
  app.put('/update-user-info', authMiddleware, updateUserInfo.updateUserInfo )


}
