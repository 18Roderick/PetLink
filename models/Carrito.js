const mongoose = require('mongoose');

const { Schema } = mongoose;

const Carrito = new Schema({
  productos: [
    {
      type: {
        cantidad: Number,
        item: {
          type: Schema.Types.ObjectId,
          ref: 'Productos'
        }
      }
    }
  ],
  cliente: {
    Type: Schema.Types.ObjectId,
    ref: 'Usuario'
  }
});

module.exports = mongoose.model('Carrito', Carrito);
