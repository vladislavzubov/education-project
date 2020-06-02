const mongoose = require('mongoose');

const ExerciseSchema = new mongoose.Schema({
  title: String,
  value: String,
  date: Date,
  author: String,
  lecture: String,
});

const ExerciseModel = mongoose.model('exercise', ExerciseSchema);

module.exports = ExerciseModel;
