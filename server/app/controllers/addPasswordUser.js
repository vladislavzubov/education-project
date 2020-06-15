const UserModel = require('../models/user');
const User = UserModel;
const { passwordCoding } = require('../helpers/passwordHelpers');

const addPasswordUser = async (req, res) => {
  const { secretKey } = req.body;
  password = passwordCoding(req.body.password);

  User.findOneAndUpdate(
    { secretKey },
    { password, secretKey: undefined, dateActive: new Date() },
    { new: true }
  )
    .exec()
    .then((user) => {
      if (!!user) {
        res.json({ message: 'Password success add' });
      } else {
        res.json({ message: 'The password was set earlier' });
      }
    })
    .catch((err) => res.status(500).json({ message: err.message }));
};

module.exports = {
  addPasswordUser,
};
