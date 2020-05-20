module.exports = {
  appPort: 3002,
  mongoURi: 'mongodb://localhost:27017/online-store',
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
}
