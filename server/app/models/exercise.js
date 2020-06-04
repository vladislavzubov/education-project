const mongoose = require('mongoose');

const ExerciseSchema = new mongoose.Schema({
  question: String,
  quantity: Array,
  correctAnswers: Array,
  date: Date,
  author: String,
  lecture: String,
  type: String,
});

const ExerciseModel = mongoose.model('exercise', ExerciseSchema);

module.exports = ExerciseModel;
