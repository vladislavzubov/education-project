module.exports = {
  appPort: process.env.PORT || 3090,
  mongoURi:
    'mongodb://heroku_4fb1rgf7:heroku_4fb1rgf7@ds237072.mlab.com:37072/heroku_4fb1rgf7',
  jwt: {
    secret: 'ne vse mogut v IT',
    tokens: {
      access: {
        type: 'access',
        expiresIn: '20m',
      },
      refresh: {
        type: 'refresh',
        expiresIn: '8000m',
      },
    },
  },
};
