const UserModel = require('../models/user');

const User = UserModel;

const updateUserInfo = async (req, res) => {
  const userId = res.locals.userId;
  const body = req.body;
  const verificationOfUserData = await verificationfUserData(body);

  if (!verificationOfUserData) {
    User.findOneAndUpdate({ _id: userId }, body, { new: true })
      .exec()
      .then((user) => res.json(user))
      .catch((err) => res.status(500).json({ message: err.message }));
  } else {
    res.status(404).json({ message: 'A user with this data already exists ' });
  }
};

const verificationfUserData = async (body) => {
  const { email, name } = body;
  if (!!name) {
    return false;
  } else {
    const res = await User.exists({ $or: [{ email: email }, { name: name }] });
    return res;
  }
};

module.exports = {
  updateUserInfo,
};
