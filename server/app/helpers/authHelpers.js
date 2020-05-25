const { v4 } = require('uuid');
const jwt = require('jsonwebtoken');
const { secret, tokens } = require('../../config/app').jwt;
const mongoose = require('mongoose');

const Token = mongoose.model('Token');

const generateAccessToken = (userId) => {
  const payLoad = {
    userId,
    type: tokens.access.type,
  };
  const options = { expiresIn: tokens.access.expiresIn };

  return jwt.sign(payLoad, secret, options);
};

const generateRefreshToken = () => {
  const payLoad = {
    id: v4(),
    type: tokens.refresh.type,
  };
  const options = { expiresIn: tokens.refresh.expiresIn };

  return {
    id: payLoad.id,
    token: jwt.sign(payLoad, secret, options),
  };
};

const replaceDbRefreshToken = (tokenId, userId) =>
  Token.findOneAndRemove({ userId })
    .exec()
    .then(() => Token.create({ tokenId, userId }));

module.exports = {
  generateAccessToken,
  generateRefreshToken,
  replaceDbRefreshToken,
};
