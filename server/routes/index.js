const express = require('express');
const passport = require('passport');
const { validationResult } = require('express-validator/check');

const router = express.Router();

const Controllers = require('./controllers');
const formValidator = require('../middleware/formValidator');

router.get('/', (req, res) => {
  res.send('inicio de pagina');
});

router.get('/signin', (req, res) => {
  console.log(req.session.flash);
  res.send('signin');
});

router.get('/signup', (req, res) => {
  res.send('registro');
});

router.post(
  '/login/signup',
  formValidator,
  passport.authenticate('signup', {
    successRedirect: '/',
    failureRedirect: '/signup',
    failureFlash: true
  })
);

router.post(
  '/login/signin',
  passport.authenticate('signin', {
    successRedirect: '/',
    failureRedirect: '/signin',
    failureFlash: true
  })
);

router.get(
  '/auth/google',
  passport.authenticate('google', {
    scope: ['email', 'profile']
  })
);

router.get(
  '/auth/google/redirect',
  passport.authenticate('google', { failureRedirect: '/login', successRedirect: '/loginSuccess' })
);

router.get('/loginSuccess', (req, res) => {
  console.log('todo bien ', req.message);
  res.json({ data: req.user });
});

router.get('/loginFailure', (req, res) => {
  res.json({ message: 'no se pudo crear usuario' });
});

module.exports = router;
