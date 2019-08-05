const express = require('express');
const passport = require('passport');
const { validationResult } = require('express-validator/check');

const router = express.Router();

const Controllers = require('./controllers');
const formValidator = require('../middleware/formValidator');

router.get('/', (req, res) => {
  res.render('index', { title: 'Petlink' });
});

router.get('/about', (req, res) => {
  res.render('about', { title: 'acerca de' });
});

router.get('/login/signin', (req, res) => {
  console.log(req.locals);
  res.render('signin', { title: 'Iniciar sesion' });
});

router.get('/login/signup', (req, res) => {
  res.render('signup', { title: 'Registro de Usuario' });
});

router.post(
  '/login/signup',
  formValidator,
  passport.authenticate('signup', {
    successRedirect: '/',
    failureRedirect: '/signup'
  })
);

router.post(
  '/login/signin',
  passport.authenticate('signin', {
    successRedirect: '/',
    failureRedirect: '/login/signin',
    failureFlash: true,
    successFlash: true
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
  passport.authenticate('google', { failureRedirect: '/login', successRedirect: '/' })
);

router.get('/loginSuccess', (req, res) => {
  console.log('todo bien ', req.message);
  res.json({ data: req.user, title: 'registro exitoso' });
});

router.get('/loginFailure', (req, res) => {
  res.json({ message: 'no se pudo crear usuario' });
});

module.exports = router;
