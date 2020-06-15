const UserResponseModel = require('../models/userResponse');
const UserResponse = UserResponseModel;

const create = (req, res) => {
  const date = new Date();
  const UserResponseObj = {
    userId: req.body.userId,
    lectureId: req.body.lectureId,
    date: date,
    completionDate: null,
    exercise: req.body.exercise,
    response: [],
  };
  UserResponse.create(UserResponseObj)
    .then((UserResponse) => res.json(UserResponse))
    .catch((err) => res.status(500).json(err));
};

const getAllResponseUser = (req, res) => {
  UserResponse.find({ userId: req.params.id })
    .exec()
    .then((UserResponse) => res.json(UserResponse))
    .catch((err) => res.status(500).json(err));
};

const updateUserInLecture = (req, res) => {
  UserResponse.findOneAndUpdate(
    { $and: [{ lectureId: req.params.id }, { userId: req.query.userId }] },
    { response: req.body.response, dateEnd: new Date() },
    { new: true }
  )
    .exec()
    .then((UserResponse) => res.json(UserResponse))
    .catch((err) => res.status(500).json(err));
};

const removeAllResponseUser = (req, res) => {
  UserResponse.deleteMany({ userId: req.params.id })
    .exec()
    .then(() => res.json({ success: true }))
    .catch((err) => res.status(500).json(err));
};

module.exports = {
  create,
  getAllResponseUser,
  removeAllResponseUser,
  updateUserInLecture,
};
