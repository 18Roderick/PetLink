const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const { googleId, googleSecret } = require('../config/credentialsGoogle');
const Usuario = require('../models/Usuario');

passport.use(
  new GoogleStrategy(
    {
      clientID: googleId,
      clientSecret: googleSecret,
      callbackURL: '/auth/google/redirect'
    },
    async (accessToken, refreshToken, profile, done) => {
      console.log(accessToken, profile);
      const user = { _id: 55151, nombre: 'teseter' };
      //return done(null, user);
    }
  )
);

