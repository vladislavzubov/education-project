const mongoose = require("mongoose");

const Product = mongoose.model("User");

const create = (req, res) => {
  Product.create(req.body)
    .then((createProduct) => res.json(createProduct))
    .catch((err) => res.status(500).json(err));
};

module.exports = {
  create,
};
