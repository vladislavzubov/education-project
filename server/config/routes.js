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
const checkRole = require('../app/middleware/checkRole');
const changePassword = require('../app/controllers/changePassword');
const updateUserInfo = require('../app/controllers/updateUserInfo');
const getAll = require('../app/controllers/getAll');


const cors = require('cors');
const firstIn = require('../app/controllers/firstIn');
const addPasswordUser = require('../app/controllers/addPasswordUser');

module.exports = (app) => {
  app.use(cors({ allowedHeaders: ['Content-Type', 'Authorization'] }));
  
  app.get(
    '/api/all/:id',
    authMiddleware,
    checkRole(['admin', 'user']),
    getAll.getAll
  );


  app.get(
    '/api/requestUserLecture/:id',
    authMiddleware,
    checkRole(['admin', 'user']),
    requestUserLecture.requestUserLecture
  );

  //userResponse
  app.get(
    //id user
    '/api/userResponse/:id',
    authMiddleware,
    checkRole(['admin', 'user']),
    userResponse.getAllResponseUser
  );

  app.post('/api/userResponse', authMiddleware, userResponse.create);

  app.delete(
    '/api/userResponse/:id',
    authMiddleware,
    checkRole(['admin', 'user']),
    userResponse.removeAllResponseUser
  );

  app.put(
    '/api/userResponse/:id',
    authMiddleware,
    checkRole(['admin', 'user']),
    userResponse.updateUserInLecture
  );

  //exercise
  app.get(
    '/api/exercise/:id',
    authMiddleware,
    checkRole(['admin', 'user']),
    exercise.exerciseForLecture
  );

  app.get(
    '/api/exercise',
    authMiddleware,
    checkRole(['admin', 'user']),
    exercise.getAll
  );

  app.get(
    '/api/exercise-all/:id',
    authMiddleware,
    checkRole(['admin', 'user']),
    exercise.getAllExercisesLecture
  );

  app.get(
    '/api/exercise-info/:id',
    authMiddleware,
    checkRole(['admin', 'user']),
    exercise.getExerciseInfo
  );

  app.post(
    '/api/exercise',
    authMiddleware,
    checkRole(['admin']),
    exercise.create
  );

  app.put(
    '/api/exercise/:id',
    authMiddleware,
    checkRole(['admin']),
    exercise.update
  );

  app.delete(
    '/api/exercise/:id',
    authMiddleware,
    checkRole(['admin']),
    exercise.remove
  );

  app.delete(
    '/api/exercise-all/:id',
    authMiddleware,
    checkRole(['admin']),
    exercise.removingFromLecture
  );

  //lecture
  app.get(
    '/api/lecture',
    authMiddleware,
    checkRole(['admin', 'user']),
    lecture.getAll
  );

  app.get(
    '/api/lecture-one/:id',
    authMiddleware,
    checkRole(['admin', 'user']),
    lecture.getOneLecture
  );

  app.get(
    '/api/lecture/:id',
    authMiddleware,
    checkRole(['admin', 'user']),
    lecture.getAllLecturesCtegory
  );

  app.post(
    '/api/lecture',
    authMiddleware,
    checkRole(['admin']),
    lecture.create
  );

  app.put(
    '/api/lecture/:id',
    authMiddleware,
    checkRole(['admin']),
    lecture.update
  );

  app.delete(
    '/api/lecture/:id',
    authMiddleware,
    checkRole(['admin']),
    lecture.remove
  );

  app.delete(
    '/api/lecture-all/:id',
    authMiddleware,
    checkRole(['admin']),
    lecture.removingFromCategory
  );

  //category
  app.get(
    '/api/lectures-of-category/:id',
    authMiddleware,
    checkRole(['admin', 'user']),
    category.lecturesOfCategory
  );

  app.get(
    '/api/category',
    authMiddleware,
    checkRole(['admin', 'user']),
    category.getAll
  );

  app.get(
    '/api/category/:id',
    authMiddleware,
    checkRole(['admin', 'user']),
    category.getOneCategory
  );

  app.post(
    '/api/category',
    authMiddleware,
    checkRole(['admin']),
    category.create
  );

  app.put(
    '/api/category/:id',
    authMiddleware,
    checkRole(['admin']),
    category.update
  );

  app.delete(
    '/api/category/:id',
    authMiddleware,
    checkRole(['admin']),
    category.remove
  );

  //auth
  app.post('/api/signin', auth.signIn);

  // registration
  app.post('/api/registration', registration.create);

  app.post('/api/refresh-tokens', auth.refreshTokens);

  // info
  app.get(
    '/api/info-user',
    authMiddleware,
    checkRole(['admin', 'user']),
    info.infoUser
  );

  app.get(
    '/api/info-trainee/:id',
    authMiddleware,
    checkRole(['admin']),
    info.infoTrainee
  );

  app.get(
    '/api/info-trainees',
    authMiddleware,
    checkRole(['admin']),
    info.infoTrainees
  );

  //serch by email

  app.post('/api/lost-password', searchByEmail.searchByEmail);

  // first in [registration] [t]

  app.post('/api/first-in', firstIn.firstIn);

  // add password user  [t]

  app.put('/api/add-pasword-user', addPasswordUser.addPasswordUser);

  //Change Password

  app.put('/api/change-password', changePassword.changePassword);

  //Update user info

  app.put(
    '/api/update-user-info',
    authMiddleware,
    checkRole(['admin']),
    updateUserInfo.updateUserInfo
  );
};
