const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    unique: true,
  },
  email: String,
  password: String,
  age: Number,
})

mongoose.model('User', UserSchema)
