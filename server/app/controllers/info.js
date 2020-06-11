const UserModel = require('../models/user');

const User = UserModel;

const infoUser = (req, res) => {
  User.findById(res.locals.userId, function (err, user) {
    if (err) {
      res.status(500).json({ message: 'Invalid server!' });
      return;
    }
    if (user === 0) {
      res.status(404).json({ message: 'User not found!' });
      return;
    }
    return res.json(user);
  });
};

const infoTrainees = (req, res) => {
  User.find({role: "user"})
    .exec()
    .then((users) => res.json(users))
    .catch((err) => res.status(500).json(err));
};

module.exports = {
  infoUser,
  infoTrainees
};
