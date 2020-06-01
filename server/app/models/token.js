const mongoose = require('mongoose');

const TokenSchema = new mongoose.Schema({
  tokenId: String,
  userId: String,
});

const TokenModel = mongoose.model('token', TokenSchema);

module.exports = TokenModel;
