const express = require('express');

const Router = express.Router();

Router.get('/', (req, res) => {
  res.send('inicio de pagina');
});

module.exports = Router;
