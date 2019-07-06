const express = require('express');
const passport = require('passport');

const router = express.Router();

const Controllers = require('./controllers');

router.get('/', (req, res) => {
  res.send('inicio de pagina');
});

router.get('/signin', (req, res) => {
  res.send('signin');
});

router.get('/registrar', (req, res) => {
  res.send('registro');
});

router.post(
  '/login/signup',
  passport.authenticate('signup', {
    successRedirect: '/',
    failureRedirect: '/signup'
  })
);

router.post(
  '/login/signin',
  passport.authenticate('signin', {
    failureRedirect: '/signin'
  }),
  (req, res) => {
    res.json({ message: `Bienvenido ${req.user.nombre}` });
  }
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
