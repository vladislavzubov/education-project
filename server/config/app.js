module.exports = {
  appPort: 3001,
  mongoURi: "mongodb://localhost:27017/online-store",
  jwt: {
    secret: "ne vse mogut v IT",
    tokens: {
      access: {
        type: "access",
        expiresIn: "2m",
      },
      refresh: {
        type: "refresh",
        expiresIn: "3m",
      },
    },
  },
};
