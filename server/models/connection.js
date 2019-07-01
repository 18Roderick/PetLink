const mongoose = require('mongoose');
const config = require('../config/databaseConfig');

const url = config.url(config.password, config.database);
mongoose.connect(url, {
  useNewUrlParser: true,
  useCreateIndex: true
});

mongoose.Promise = global.Promise;

const { connection } = mongoose;

connection.on('error', console.error.bind(console, 'connection error:'));
connection.once('open', (...args) => {
  console.log(args, 'conexion exitosa');
});

module.exports = mongoose;
