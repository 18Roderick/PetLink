const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const { GOOGLE_ID, GOOGLE_SECRET } = require('../config/credentialsGoogle');
const Usuario = require('../models/Usuario');

passport.use(
  new GoogleStrategy(
    {
      clientID: GOOGLE_ID,
      clientSecret: GOOGLE_SECRET,
      callbackURL: '/auth/google/redirect',
      userProfileURL: 'https://www.googleapis.com/oauth2/v3/userinfo'
    },
    async (accessToken, refreshToken, email2, profile, done) => {
      try {
        const {
          given_name: nombre,
          family_name: apellido,
          picture,
          email,
          sub: googleId
        } = profile._json;
        console.log(profile._json);
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
        return done(null, user);
      } catch (error) {
        console.log('ocurrio un error :', error.message);
        return done(error, false, { message: 'ocurrio un errror ' });
      }
    }
  )
);
