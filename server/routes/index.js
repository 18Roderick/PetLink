const express = require('express');

const router = express.Router();

const Controllers = require('./controllers');

router.get('/', (req, res) => {
  res.send('inicio de pagina');
});

router.get('/login', (req, res) => {
  res.send('login');
});

router.post('/login/signup', Controllers.signup);

module.exports = router;
