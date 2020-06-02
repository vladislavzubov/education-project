const auth = require('../app/controllers/auth');
const registration = require('../app/controllers/registration');
const info = require('../app/controllers/info');
const exercise = require('../app/controllers/exercise');
const lecture = require('../app/controllers/lecture');
const category = require('../app/controllers/category');
const searchByEmail = require('../app/controllers/searchByEmail');
const authMiddleware = require('../app/middleware/auth');
const changePassword = require('../app/controllers/changePassword');
const updateUserInfo = require('../app/controllers/updateUserInfo');
const cors = require('cors');

module.exports = (app) => {
  app.use(cors({ allowedHeaders: ['Content-Type', 'Authorization'] }));

  //exercise
  app.get('/api/exercise', authMiddleware, exercise.getAll);
  app.post('/api/exercise', authMiddleware, exercise.create);
  app.put('/api/exercise/:id', authMiddleware, exercise.update);
  app.delete('/api/exercise/:id', authMiddleware, exercise.remove);

  //lecture
  app.get('/api/lecture', authMiddleware, lecture.getAll);
  app.post('/api/lecture', authMiddleware, lecture.create);
  app.put('/api/lecture/:id', authMiddleware, lecture.update);
  app.delete('/api/lecture/:id', authMiddleware, lecture.remove);

  //category
  app.get('/api/category', authMiddleware, category.getAll);
  app.post('/api/category', authMiddleware, category.create);
  app.put('/api/category/:id', authMiddleware, category.update);
  app.delete('/api/category/:id', authMiddleware, category.remove);

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
