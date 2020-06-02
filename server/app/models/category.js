const mongoose = require('mongoose');

const CategorySchema = new mongoose.Schema({
  name: String,
});

const CategoryModel = mongoose.model('category', CategorySchema);

module.exports = CategoryModel;
