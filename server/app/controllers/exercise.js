const ExerciseModel = require('../models/exercise');

const Exercise = ExerciseModel;

const getAll = (req, res) =>
  Exercise.find()
    .exec()
    .then((exercise) => res.json(exercise))
    .catch((err) => res.status(500).json(err));

const getAllExercisesLecture = (req, res) => {
  Exercise.find({ lecture: req.params.id })
    .exec()
    .then((exercise) => res.json(exercise))
    .catch((err) => res.status(500).json(err));
};

const create = (req, res) => {
  const date = new Date();
  const exerciseObj = {
    question: req.body.question,
    quantity: req.body.quantity,
    correctAnswers: req.body.correctAnswers,
    date: date,
    author: req.body.author,
    lecture: req.body.lecture,
    type: req.body.type,
  };
  Exercise.create(exerciseObj)
    .then((exercise) => res.json(exercise))
    .catch((err) => res.status(500).json(err));
};

const update = (req, res) => {
  Exercise.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
    .exec()
    .then((exercise) => res.json(exercise))
    .catch((err) => res.status(500).json(err));
};

const remove = (req, res) => {
  Exercise.deleteOne({ _id: req.params.id })
    .exec()
    .then(() => res.json({ success: true }))
    .catch((err) => res.status(500).json(err));
};

const removingFromLecture = (req, res) => {
  Exercise.deleteMany({ lecture: req.params.id })
    .exec()
    .then(() => res.json({ success: true }))
    .catch((err) => res.status(500).json(err));
};

const shuffle = (arr) => {
  let j, temp;
  for (let i = arr.length - 1; i > 0; i--) {
    j = Math.floor(Math.random() * (i + 1));
    temp = arr[j];
    arr[j] = arr[i];
    arr[i] = temp;
  }
  return arr;
};

const exerciseForLecture = async (req, res) => {
  const numberOfTest = req.query.numberOfTest;
  const numberOfText = req.query.numberOfText;

  let tes = [];
  let tex = [];

  await Exercise.find({ lecture: req.params.id })
    .exec()
    .then((exercises) =>
      shuffle(exercises).map((exercise, index) => {
        exercise.type === 'test' ? tes.push(exercise) : tex.push(exercise);
      })
    );
  const tests = tes.splice(0, numberOfTest);
  const texts = tex.splice(0, numberOfText);

  res.json({ texts, tests });
};

const getExerciseInfo = (req, res) => {
  Exercise.findOne({ _id: req.params.id })
    .exec()
    .then((exercise) => {
      res.json(exercise);
    });
};

module.exports = {
  getAll,
  create,
  update,
  remove,
  removingFromLecture,
  getAllExercisesLecture,
  exerciseForLecture,
  getExerciseInfo,
};
