const express = require('express');
const morgan = require('morgan');
const path = require('path');
const bodyParser = require('body-parser');
// rutas
const routers = require('./routes/index');

// inicializaciones
const app = express();
require('./models/connection');

// variables
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
app.use(morgan('common'));
app.use('/', routers);

app.listen(PORT, () => console.log(`server ready on http://localhost:${PORT}`));
