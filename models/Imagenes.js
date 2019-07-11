const mongoose = require('mongoose');

const { Schema } = mongoose;

const Imagenes = new Schema({
  idOwner: {
    type: Schema.Types.ObjectId
  },
  nombre: String,
  link: String,
  publicId: String
});

module.exports = mongoose.model('Imagenes', Imagenes);