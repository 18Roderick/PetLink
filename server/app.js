const express = require('express');
const morgan = require('morgan');
const path = require('path');
const bodyParser = require('body-parser');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const MongoStore = require('connect-mongo')(session);
const passport = require('passport');
// rutas
const routers = require('./routes/index');
const mongoose = require('./models/connection');

// inicializaciones
const app = express();
require('./services/passport');
require('./services/passportGoogle');

// variables
const store = new MongoStore({ mongooseConnection: mongoose.connection });
const PORT = process.env.PORT || 3000;
const PUBLIC_FILES = path.join(__dirname, 'public');
const VIEWS = path.join(__dirname, 'views');

// configuraciones
app.set('port', PORT);
app.set('views', VIEWS);
app.set('view engine', 'pug');

// seteando direcciones estaticas en el servidor
app.use(express.static(PUBLIC_FILES));

// middlewares
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(
  session({
    secret: 'abc545454234 55',
    store,
    resave: false,
    saveUninitialized: false
  })
);

app.use(passport.initialize());
app.use(passport.session());
app.use(morgan('common'));

// Global Variables
app.use((req, res, next) => {
  res.locals.user = req.user || null;
  next();
});

// rutas
app.use('/', routers);

app.listen(PORT, () => console.log(`server ready on http://localhost:${PORT}`));
