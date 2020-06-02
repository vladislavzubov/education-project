const mongoose = require('mongoose');

const LectureSchema = new mongoose.Schema({
  title: String,
  value: String,
  persent: Number,
  date: Date,
  author: String,
  category: String,
  link: String,
});

const LectureModel = mongoose.model('lecture', LectureSchema);

module.exports = LectureModel;
