const mongoose = require('mongoose');

const { Schema } = mongoose;

const Perro = Schema({
  usuarioId: {
    type: Schema.Types.ObjectId
  },
  nombre: {
    type: String,
    require: true
  },
  raza: {
    type: String,
    required: true
  },
  sexo: {
    type: String,
    required: true
  },
  edad: {
    type: Number,
    required: true
  },
  detalles: String,
  recomendado: {
    type: {
      bebes: Boolean,
      ninos: Boolean,
      adultos: Boolean,
      descripcion: String
    }
  }
});

module.exports = mongoose.model('Perro', Perro);
