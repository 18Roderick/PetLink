const Perros = Object.freeze({
  nombre: String,
  raza: String,
  sexo: String, // limitado por dos opciones hembra o maccho
  edad: Number,
  detalles: String,
  recomendado: {
    niños: Boolean,
    adultos: Boolean,
    descripcion: String
  }
});

module.exports = Perros;
