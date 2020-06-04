const mongoose = require('mongoose');
const UserResponseModel = require('../models/userResponse');
const UserResponse = UserResponseModel;

const create = (req, res) => {
  const date = new Date();

  const UserResponseObj = {
    userId: req.body.userId,
    lectureId: req.body.lectureId,
    date: date,
    exersice: req.body.exersice,
    response: req.body.response,
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

const updateInLecture = (req, res) => {
    UserResponse.findOneAndUpdate({ lectureId: req.params.id }, req.body, { new: true })
      .exec()
      .then((lecture) => res.json(lecture))
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
  updateInLecture
};