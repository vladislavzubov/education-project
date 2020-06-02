const mongoose = require('mongoose');
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
    title: req.body.title,
    value: req.body.value,
    date: date,
    author: req.body.author,
    lecture: req.body.lecture,
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

module.exports = {
  getAll,
  create,
  update,
  remove,

  getAllExercisesLecture,
};
