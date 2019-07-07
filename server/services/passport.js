const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const { validationResult } = require('express-validator/check');

const Usuario = require('../models/Usuario');
const Crypting = require('../utils/crytping');

passport.use(
  'signup',
  new LocalStrategy(
    {
      usernameField: 'email',
      passwordField: 'password1',
      passReqToCallback: true
    },
    async (req, email, password, done) => {
      const errors = validationResult(req);
      try {
        if (!errors.isEmpty()) return done(null, false, { message: errors.array() });
        const { nombre, apellido, password1, celular, telefono } = req.body;
        const encryptPassword = await Crypting.encrypt(password1);

        const data = await Usuario.create({
          nombre,
          apellido,
          email,
          contacto: {
            telefono: [telefono],
            celular: [celular]
          },
          password: encryptPassword,
          status: {
            code: '153151515135135135',
            active: true
          }
        });

        return done(null, data);
      } catch (error) {
        return done(error, false);
      }
    }
  )
);

passport.use(
  'signin',
  new LocalStrategy(
    {
      usernameField: 'email',
      passwordField: 'password'
    },
    async (email, password, done) => {
      try {
        const user = await Usuario.findOne({ email });

        if (!user) {
          return done(null, false, { message: 'No existe este usuario' });
        }
        if (!(await Crypting.compare(password, user.password))) {
          return done(null, false, { message: 'Usuario o contrasena incorrectos' });
        }

        return done(null, user, { message: 'usuario logeado' });
      } catch (error) {
        return done(error, false, { message: error.message });
      }
    }
  )
);

passport.serializeUser(async (user, done) => {
  done(null, user._id);
});

passport.deserializeUser(async (id, done) => {
  const data = await Usuario.findOne({ _id: id });
  done(null, data);
});
