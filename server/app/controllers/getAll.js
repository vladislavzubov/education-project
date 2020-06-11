const CategoryModel = require('../models/category');
const LectureModel = require('../models/lecture');
const ExerciseModel = require('../models/exercise');

const Exercise = ExerciseModel;
const Lecture = LectureModel;
const Category = CategoryModel;

const getAll = async (req, res) => {
  let categoryes;
  let lectures;
  let exercises;

  await Category.find()
    .exec()
    .then((category) => (categoryes = category))
    .catch((err) => res.status(500).json(err));

  await Lecture.find()
    .then((lecture) => (lectures = lecture))
    .catch((err) => res.status(500).json(err));

  await Exercise.find()
    .exec()
    .then((exercise) => (exercises = exercise))
    .catch((err) => res.status(500).json(err));

  //   let resolves = Exercise.find({ lecture: String(lecture._id) });
  //   let resolves;

  //   lectures.map((lecture) => {
  //     const exercisesLecture = Exercise.find({ lecture: String(lecture._id) });
  //     console.log(exercisesLecture);

  //     const lecturefull = { ...lecture, childNodes: exercisesLecture };
  //     resolves.push(lecturefull);
  //   });
  //   console.log(resolves);

  //   //   let resolves = { categoryes, lectures, exercises };
  res.json({ categoryes, lectures, exercises });
};

module.exports = {
  getAll,
};
