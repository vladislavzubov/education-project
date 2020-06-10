const UserModel = require('../models/user');

const User = UserModel;
const { passwordCoding } = require('../helpers/passwordHelpers');

const create = async (req, res) => {
  const verificationOfUserData = await verificationfUserData(req.body);

  if (!verificationOfUserData) {
    const passwordUser = passwordCoding(req.body.password);

    const userObj = {
      name: req.body.name,
      email: req.body.email,
      password: passwordUser,
      age: req.body.age,
      role: req.body.role,
    };
    res.json(userObj);
    User.create(userObj)
      .then((createUser) => res.json(createUser))
      .catch((err) => res.status(500).json(err));
  }

  if (verificationOfUserData.name === req.body.name) {
    res
      .status(404)
      .json({ message: 'A user with the same name already exists ' });
  }
  if (verificationOfUserData.email === req.body.email) {
    res
      .status(404)
      .json({ message: 'A user with the same email already exists ' });
  } else {
  }
};

const verificationfUserData = async (body) => {
  const { email, name } = body;

  const res = await User.findOne({ $or: [{ email: email }, { name: name }] });

  return res;
};

module.exports = {
  create,
};
