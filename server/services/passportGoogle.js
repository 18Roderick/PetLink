const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const { GOOGLE_ID, GOOGLE_SECRET } = require('../config/credentialsGoogle');
const Usuario = require('../models/Usuario');
const { encrypt } = require('../utils/crytping');

passport.use(
  new GoogleStrategy(
    {
      clientID: GOOGLE_ID,
      clientSecret: GOOGLE_SECRET,
      callbackURL: '/auth/google/redirect',
      userProfileURL: 'https://www.googleapis.com/oauth2/v3/userinfo',
      passReqToCallback: true
    },
    async (req, accessToken, refreshToken, profile, cb) => {
      try {
        const {
          given_name: nombre,
          family_name: apellido,
          picture,
          email,
          sub: googleId
        } = profile._json;

        let user = await Usuario.findOne({ email });
        if (!user) {
          user = await Usuario.create({
            nombre,
            apellido,
            fotos: [picture],
            email,
            googleId
          });
        }
        return cb(null, user);
      } catch (error) {
        console.log('ocurrio un error :', error.message);
        return done(error, false, { message: 'ocurrio un errror ' });
      }
    }
  )
);
