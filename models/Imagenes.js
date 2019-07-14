const mongoose = require('mongoose');

const { Schema } = mongoose;

const Imagenes = new Schema({
  owner: {
    type: Schema.Types.ObjectId,
    ref: 'Usuario'
  },
  perro: {
    type: Schema.Types.ObjectId,
    ref: 'Perro'
  },
  nombre: String,
  link: String,
  path: String
});

module.exports = mongoose.model('Imagenes', Imagenes);
