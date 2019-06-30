const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const { googleId, googleSecret } = require('../config/credentialsGoogle');

passport.use(
  new GoogleStrategy(
    {
      clientID: googleId,
      clientSecret: googleSecret,
      callbackURL: '/auth/google/redirect'
    },
    async (accessToken, refreshToken, profile, cb) => {
      console.log(accessToken, profile);
      const user = { id: 55151, nombre: 'teseter' };
      return cb(err, user);
    }
  )
);
