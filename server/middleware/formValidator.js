const { check } = require('express-validator');

module.exports = [
  check('nombre', 'falta nombre de usuario')
    .not()
    .isEmpty(),
  check('email', 'tu correo no cumple las condiciones')
    .not()
    .isEmpty()
    .isEmail(),
  check('password', 'debe contener al menos 5 caracteres')
    .isLength({ min: 5 }),
  check('password2').
];
