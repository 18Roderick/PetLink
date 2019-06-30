const mongoose = require('mongoose');

const { Schema } = mongoose;

const Usuario = new Schema({
  googleId: {
    type: Schema.Types.ObjectId
  },
  nombre: {
    type: String,
    required: true
  },
  apellido: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  contacto: {
    type: {
      telefono: [String],
      celular: [String]
    }
  },
  password: {
    type: String,
    required: true
  },
  fotos: [String],
  perros: String,
  roll: {
    type: String,
    enum: ['usuario', 'admin'],
    default: 'usuario',
    required: true
  },
  status: {
    type: {
      code: String,
      active: {
        type: Boolean,
        default: false
      }
    }
  },
  direccion: {
    provincia: String,
    distrito: String,
    corregimiento: String,
    detalles: String
  },
  dateCreated: {
    type: Date,
    default: Date.now()
  }
});

module.exports = mongoose.model('Usuario', Usuario);
