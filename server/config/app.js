module.exports = {
  appPort: process.env.PORT || 3090,
  mongoURi:
    process.env.NODE_ENV === 'production'
      ? 'mongodb://heroku_2mx9n2p0:ph9kk4v8fft8586k3ke6vp5sni@ds259377.mlab.com:59377/heroku_2mx9n2p0'
      : 'mongodb://localhost:27017/online-store',
  jwt: {
    secret: 'ne vse mogut v IT',
    tokens: {
      access: {
        type: 'access',
        expiresIn: '5000m',
      },
      refresh: {
        type: 'refresh',
        expiresIn: '800000m',
      },
    },
  },
};
