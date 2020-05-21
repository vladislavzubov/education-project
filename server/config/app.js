module.exports = {
  appPort: 3004,
  mongoURi: 'mongodb://localhost:27017/online-store',
  jwt: {
    secret: 'ne vse mogut v IT',
    tokens: {
      access: {
        type: 'access',
        expiresIn: '0.1m',
      },
      refresh: {
        type: 'refresh',
        expiresIn: '8000m',
      },
    },
  },
}
