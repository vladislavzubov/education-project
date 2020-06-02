const mongoose = require('mongoose');
const LectureModel = require('../models/lecture');

const Lecture = LectureModel;

const getAll = (req, res) =>
  Lecture.find()
    .exec()
    .then((lecture) => res.json(lecture))
    .catch((err) => res.status(500).json(err));

const create = (req, res) => {
  const date = new Date();
  const persent = 0;
  const lectureObj = {
    title: req.body.title,
    value: req.body.value,
    persent: persent,
    date: date,
    author: req.body.author,
    category: req.body.category,
    link: req.body.link,
  };
  
  Lecture.create(lectureObj)
    .then((lecture) => res.json(lecture))
    .catch((err) => res.status(500).json(err));
};

const update = (req, res) => {
  Lecture.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
    .exec()
    .then((lecture) => res.json(lecture))
    .catch((err) => res.status(500).json(err));
};

const remove = (req, res) => {
  Lecture.deleteOne({ _id: req.params.id })
    .exec()
    .then(() => res.json({ success: true }))
    .catch((err) => res.status(500).json(err));
};

module.exports = {
  getAll,
  create,
  update,
  remove,
};
