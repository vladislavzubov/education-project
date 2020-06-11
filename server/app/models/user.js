const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  age: Number,
  keyChangePasswor: String,
  role: String,
  active: Boolean,
  dateRegistration: Date,
  dateLink: Date,
  dateActive: Date,
});

const UserModel = mongoose.model('user', UserSchema);

module.exports = UserModel;
