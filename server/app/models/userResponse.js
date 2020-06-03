const mongoose = require('mongoose');

const UserResponseSchema = new mongoose.Schema({
  userId: String,
  lectureId: String,
  date: Date,
  exersice: Array,
  response: Array,
});

const UserResponseModel = mongoose.model('userResponse', UserResponseSchema);

module.exports = UserResponseModel;
