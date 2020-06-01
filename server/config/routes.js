
const auth = require('../app/controllers/auth');
const registration = require('../app/controllers/registration');
const info = require('../app/controllers/info');
const searchByEmail = require('../app/controllers/searchByEmail');
const authMiddleware = require('../app/middleware/auth');
const changePassword = require('../app/controllers/changePassword');
const updateUserInfo = require('../app/controllers/updateUserInfo');
const cors = require('cors');

module.exports = (app) => {
  app.use(cors({ allowedHeaders: ['Content-Type', 'Authorization'] }));


  //auth
  app.post('/api/signin', auth.signIn);

  // registration
  app.post('/api/registration', registration.create);
  app.post('/api/refresh-tokens', auth.refreshTokens);

  // info
  app.get('/api/info-user', authMiddleware, info.infoUser);

  //serch by email

  app.post('/api/lost-password', searchByEmail.searchByEmail);

  //Change Password

  app.put('/api/change-password', changePassword.changePassword);

  //Update user info

  app.put(
    '/api/update-user-info',
    authMiddleware,
    updateUserInfo.updateUserInfo
  );
};
