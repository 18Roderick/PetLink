const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  res.send('inicio de pagina', { title: 'nombre' });
});

router.get('/login', (req, res) => {
  res.send('login');
});

module.exports = router;
