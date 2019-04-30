//  app PetLink

const express = require('express');

const routers = require('./routes/index');

const app = express();

app.use(routers);
app.listen(3000);
