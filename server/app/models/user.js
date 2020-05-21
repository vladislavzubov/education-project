const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  age: Number,
  keyChangePasswor: String,
})

mongoose.model('User', UserSchema)
