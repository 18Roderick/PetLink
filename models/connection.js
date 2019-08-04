const mongoose = require('mongoose');
const config = require('../config/databaseConfig');

const dev = 'mongodb://localhost:27017/PetlinkDevelopment';

const url = config.url(config.password, config.database);
mongoose.connect(dev, {
  useNewUrlParser: true,
  useCreateIndex: true
});

mongoose.Promise = global.Promise;

const { connection } = mongoose;

connection.on('error', console.error.bind(console, 'connection error:'));
connection.once('open', (...args) => {
  console.log('conexion exitosa');
});

module.exports = mongoose;
