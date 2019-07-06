const { check } = require('express-validator');

module.exports = [
  check('nombre').not().isEmpty(),
  check('email').not().isEmpty().isEmail(),
  check('password').isLength({ min: 5})
]