const mongoose = require('mongoose');

const UserResponseSchema = new mongoose.Schema({
  userId: String,
  lectureId: String,
  date: Date,
  dateEnd: Date,
  completionDate: Date,
  exercise: {},
  response: {},
});

const UserResponseModel = mongoose.model('userResponse', UserResponseSchema);

module.exports = UserResponseModel;
