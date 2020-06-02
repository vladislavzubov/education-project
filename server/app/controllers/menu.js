const MenuModel = require('../models/menu');

const Menu = MenuModel;

const getAll = (req, res) =>
  Menu.find()
    .exec()
    .then((menu) => res.json(menu))
    .catch((err) => res.status(500).json(err));

module.exports = {
  getAll,
};
