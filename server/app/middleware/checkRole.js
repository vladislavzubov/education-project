module.exports = (roles) => (req, res, next) => {
  if (roles.includes(res.locals.role)) {
    next();
    return;
  }

  res.status(401).json({
    errCode: 654,
    message: 'Role not check',
  });
};
