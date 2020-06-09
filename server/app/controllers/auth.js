const jwt = require('jsonwebtoken');
const authHelper = require('../helpers/authHelpers');
const {
  passwordCoding,
  passwordCompare,
} = require('../helpers/passwordHelpers');
const { secret } = require('../../config/app').jwt;
const UserModel = require('../models/user');
const TokenModel = require('../models/token');

const User = UserModel;
const Token = TokenModel;

const updateTokens = (userId, role) => {
  const accessToken = authHelper.generateAccessToken(userId, role);
  const refreshToken = authHelper.generateRefreshToken();

  return authHelper.replaceDbRefreshToken(refreshToken.id, userId).then(() => ({
    accessToken,
    refreshToken: refreshToken.token,
  }));
};

const updateTokenAccess = (userId, role) => {
  const accessToken = authHelper.generateAccessToken(userId, role);

  return authHelper.replaceDbRefreshToken(userId).then(() => ({
    accessToken,
  }));
};

const signIn = (req, res) => {
  const { email, password } = req.body;
  User.findOne({ $or: [{ email: email }, { name: email }] })
    .exec()
    .then((user) => {
      if (!user) {
        res.status(401).json({ message: 'User does not exist!' });
      }

      passwordServer = passwordCoding(password);
      passwordUser = user.password;

      const resolveCompare = passwordCompare(passwordServer, passwordUser);

      if (resolveCompare) {
        updateTokens(user._id, user.role).then((tokens) =>
          res.json({
            tokens,
          })
        );
      } else {
        res.status(401).json({ message: 'Invalid credentials' });
      }
    })
    .catch((err) => res.status(500).json({ message: err.message }));
};

const refreshTokens = (req, res) => {
  const { refreshToken } = req.body;
  let payload;
  try {
    payload = jwt.verify(refreshToken, secret);
    if (payload.type !== 'refresh') {
      res.status(400).json({ message: 'Invalid token!' });
      return;
    }
  } catch (e) {
    if (e instanceof jwt.TokenExpiredError) {
      res.status(400).json({ message: 'Token expired!' });
      return;
    } else if (e instanceof jwt.TokenExpiredError) {
      res.status(400).json({ message: 'Invalid tokenas!' });
      return;
    }
  }

  Token.findOne({ tokenId: payload.id })
    .exec()
    .then((token) => {
      if (token === null) {
        res.json(token);
        throw new Error('Invalid tokens!');
      }
      return updateTokenAccess(token.userId);
    })
    .then((tokens) => res.json(tokens))
    .catch((err) => res.status(400).json({ message: err.message }));
};

module.exports = {
  signIn,
  refreshTokens,
};
