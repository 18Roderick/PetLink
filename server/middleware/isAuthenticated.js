const isAuthenticated = (req, res, next) => {
  if (req.isAuthenticated()) next();
  res.redirect('/login/signin');
};

const isAdmin = (req, res, next) => {
  if (req.isAuthenticated && req.user.roll === 'admin') next();
  res.redirect('/admin/signin');
};

module.exports = { isAuthenticated, isAdmin };
