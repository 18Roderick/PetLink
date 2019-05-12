//  app PetLink

const express = require('express');
const morgan = require('morgan');
const path = require('path');

const routers = require('./routes/index');

const app = express();

const PORT = process.env.PORT || 3000;
const PUBLIC_FILES = path.join(__dirname, 'public');
const VIEWS = path.join(__dirname, 'views');

app.set('port', PORT);

// seteando direcciones estaticas en el servidor
app.set('views', VIEWS);
app.set('view engine', 'pug');
app.use(express.static(PUBLIC_FILES));

// middlewares
app.use(morgan('common'));
app.use('/', routers);

app.listen(PORT, () => console.log(`server ready on http://localhost:${PORT}`));
