const UserModel = require('../models/user');
const User = UserModel;
const { sendEmail } = require('./sendEmail');
const { passwordCoding } = require('../helpers/passwordHelpers');

const firstIn = async (req, res) => {
  const verificationOfUserData = await verificationfUserData(req.body);
  const encodedKey = await passwordCoding(new Date());
  console.log(encodedKey);

  if (!verificationOfUserData) {
    const userObj = {
      name: req.body.name,
      email: req.body.email,
      password: undefined,
      age: req.body.age,
      role: req.body.role,
      active: false,
      dateRegistration: new Date(),
      dateActive: undefined,
      secretKey: encodedKey,
    };

    //res.json(userObj);
    User.create(userObj);
    const { email } = req.body;

    // putSecretKey(encodedKey, email);
    const activeLink = `http://localhost:3000/first-in?secretKey=${encodedKey}`;
    const result = await sendEmail({
      email,
      body: `
      Привет мы для тебя создали обучение, 
    перейди по ссылке и твое 2-ух недельное обучение начнется прямо сейчас, 
    удачи!!!
    ${activeLink}
    `,
    });
    res.json(result);
    // res.status(200).json({ message: `Link sent to email ${email}` });
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

// const putSecretKey = (key, email) => {
//   User.findOneAndUpdate({ email: email }, { secretKey: key }, { new: true })
//     .exec()
//     .then((user) => res.json(user))
//     .catch((err) => res.status(500).json({ massage: err.message }));
// };

module.exports = {
  firstIn,
};
