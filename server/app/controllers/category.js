const CategoryModel = require('../models/category');
const LectureModel = require('../models/lecture');
const UserResponseModel = require('../models/userResponse');

const UserResponse = UserResponseModel;
const Lecture = LectureModel;
const Category = CategoryModel;

const getAll = (req, res) =>
  Category.find()
    .exec()
    .then((category) => res.json(category))
    .catch((err) => res.status(500).json(err));

const getOneCategory = (req, res) =>
  Category.findOne({ _id: req.params.id })
    .exec()
    .then((category) => res.json(category))
    .catch((err) => res.status(500).json(err));

const create = (req, res) => {
  const categoryObj = {
    name: req.body.name,
    alias: req.body.alias,
  };

  Category.create(categoryObj)
    .then((category) => res.json(category))
    .catch((err) => res.status(500).json(err));
};

const update = (req, res) => {
  Category.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
    .exec()
    .then((category) => res.json(category))
    .catch((err) => res.status(500).json(err));
};

const remove = (req, res) => {
  Category.deleteOne({ _id: req.params.id })
    .exec()
    .then(() => res.json({ success: true }))
    .catch((err) => res.status(500).json(err));
};

const lecturesOfCategory = async (req, res) => {
  let AllLectures = [];
  let allUserResponse = [];
  let oneCategory = {};

  await Lecture.find({ category: req.params.id })
    .exec()
    .then((lectures) =>
      lectures.map((lecture, index) => {
        AllLectures.push(lecture);
      })
    )
    .catch((err) => res.status(500).json(err));

  await UserResponse.find({ userId: req.query.userId })
    .exec()
    .then((userResponse) => {
      allUserResponse = userResponse;
    })
    .catch((err) => res.status(500).json(err));

  await Category.findOne({ _id: req.params.id })
    .exec()
    .then((category) => (oneCategory = category))
    .catch((err) => res.status(500).json(err));

  const resolve = AllLectures.reduce((currentValue, lecture) => {
    const value = {
      lectureId: lecture._id,
      LectureTitle: lecture.title,
      categoryId: lecture.category,
      categoryName: oneCategory.name,
    };

    const response = allUserResponse.find((resp) => {
      return resp.lectureId === String(lecture._id);
    });

    if (!response) {
      return [
        ...currentValue,
        {
          ...value,
          status: 'start',
        },
      ];
    }
    if (!response.response) {
      return [
        ...currentValue,
        {
          ...value,
          status: 'middle',
        },
      ];
    }
    return [
      ...currentValue,
      {
        ...value,
        status: 'end',
      },
    ];
  }, []);

  res.json(resolve);
};

module.exports = {
  getOneCategory,
  getAll,
  create,
  update,
  remove,
  lecturesOfCategory,
};
