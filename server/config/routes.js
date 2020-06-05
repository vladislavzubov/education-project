const auth = require('../app/controllers/auth');
const registration = require('../app/controllers/registration');
const info = require('../app/controllers/info');
const exercise = require('../app/controllers/exercise');
const lecture = require('../app/controllers/lecture');
const category = require('../app/controllers/category');
const userResponse = require('../app/controllers/userResponse');
const requestUserLecture = require('../app/controllers/requestUserLecture');
const searchByEmail = require('../app/controllers/searchByEmail');
const authMiddleware = require('../app/middleware/auth');
const changePassword = require('../app/controllers/changePassword');
const updateUserInfo = require('../app/controllers/updateUserInfo');
const cors = require('cors');

module.exports = (app) => {
  app.use(cors({ allowedHeaders: ['Content-Type', 'Authorization'] }));

  app.get(
    '/api/requestUserLecture/:id',
    authMiddleware,
    requestUserLecture.requestUserLecture
  );

  //userResponse
  app.get(
    '/api/userResponse/:id',
    authMiddleware,
    userResponse.getAllResponseUser
  );
  app.post('/api/userResponse', authMiddleware, userResponse.create);
  app.delete(
    '/api/userResponse/:id',
    authMiddleware,
    userResponse.removeAllResponseUser
  );
  app.put(
    '/api/userResponse/:id',
    authMiddleware,
    userResponse.updateUserInLecture
  );

  //exercise
  app.get('/api/exercise/:id', exercise.exerciseForLecture);
  app.get('/api/exercise', authMiddleware, exercise.getAll);
  app.get(
    '/api/exercise-all/:id',
    authMiddleware,
    exercise.getAllExercisesLecture
  );
  app.post('/api/exercise', authMiddleware, exercise.create);
  app.put('/api/exercise/:id', authMiddleware, exercise.update);
  app.delete('/api/exercise/:id', authMiddleware, exercise.remove);
  app.delete(
    '/api/exercise-all/:id',
    authMiddleware,
    exercise.removingFromLecture
  );

  //lecture
  app.get('/api/lecture', authMiddleware, lecture.getAll);
  app.get('/api/lecture-one/:id', authMiddleware, lecture.getOneLecture);
  app.get('/api/lecture/:id', authMiddleware, lecture.getAllLecturesCtegory);
  app.post('/api/lecture', authMiddleware, lecture.create);
  app.put('/api/lecture/:id', authMiddleware, lecture.update);
  app.delete('/api/lecture/:id', authMiddleware, lecture.remove);
  app.delete(
    '/api/lecture-all/:id',
    authMiddleware,
    lecture.removingFromCategory
  );

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
