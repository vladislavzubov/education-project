const LectureModel = require('../models/lecture');

const Lecture = LectureModel;

const getAllLecturesCtegory = (req, res) => {
  Lecture.find({ category: req.params.id })
    .exec()
    .then((lecture) => res.json(lecture))
    .catch((err) => res.status(500).json(err));
};

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
    numberOfText: req.body.numberOfText,
    numberOfTest: req.body.numberOfTest,
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

const getOneLecture = (req, res) => {
  Lecture.findOne({ _id: req.params.id })
    .exec()
    .then((lecture) => res.json(lecture))
    .catch((err) => res.status(500).json(err));
};

const removingFromCategory = (req, res) => {
  Lecture.deleteMany({ category: req.params.id })
    .exec()
    .then(() => res.json({ success: true }))
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
  getAllLecturesCtegory,
  removingFromCategory,
  getOneLecture,
};
