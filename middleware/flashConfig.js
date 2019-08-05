module.exports = (req, res, next) => {
  res.locals.message_succes = req.flash('message_succes');
  res.locals.welcome = req.flash('welcome');
  res.locals.error = req.flash('error');
  res.locals.user = req.user || null;
  next();
};
