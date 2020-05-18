const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  email: String,
  password: String,
  age: Number,
});

mongoose.model("User", UserSchema);
