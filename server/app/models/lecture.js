const mongoose = require('mongoose');

const LectureSchema = new mongoose.Schema({
  title: String,
  value: String,
  persent: Number,
  date: Date,
  author: String,
  category: String,
  categoryName: String,
  link: String,
  numberOfText: Number,
  numberOfTest: Number,
  numberOfCode: Number,
});

module.exports = mongoose.model('lecture', LectureSchema);
