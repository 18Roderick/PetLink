const isAuthenticated = (req, res, next) => {
  if (req.isAuthenticated()) {
    next();
  }
  res.redirect('/login/signin');
};

module.exports = { isAuthenticated };
