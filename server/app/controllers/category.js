const mongoose = require('mongoose');
const CategoryModel = require('../models/category');

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

module.exports = {
  getOneCategory,
  getAll,
  create,
  update,
  remove,
};
