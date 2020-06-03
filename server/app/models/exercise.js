const mongoose = require('mongoose');

const ExerciseSchema = new mongoose.Schema({
  title: String,
  value: String,
  date: Date,
  author: String,
  lecture: String,
  type: String,
  time: Number,
});

const ExerciseModel = mongoose.model('exercise', ExerciseSchema);

module.exports = ExerciseModel;
