const mongoose = require('mongoose');

const ExerciseSchema = new mongoose.Schema({
  question: String,
  quantity: {},
  correctAnswers: {},
  date: Date,
  author: String,
  lecture: String,
  type: String,
});

const ExerciseModel = mongoose.model('exercise', ExerciseSchema);

module.exports = ExerciseModel;

// {
//   question: "jsfdgnjsdfg?",
//   quantity: {
//     1: "fddfdfdf",
//     2: "2143dfsgsdfg",
//     3: "sadfasdfasdfa",
//     4: "sfdgsdfgsdfgsdfg",
//     5: "Asdfasdfasdfasdf",
//   },
//   correctAnswers: {
//     2: true,
//     5: true,
//   },
//   author: Alex,
//   lecture: "8165as4dfasdfasdfsadf",
//   type: "test",
// }
