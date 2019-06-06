const Usuario = Object.freeze({
  nombre: String,
  apellido: String,
  email: String,
  password: String,
  contacto: {
    telefono: [],
    celular: []
  },
  fotos: [],
  perros: [
    {
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
    }
  ],
  roll: ['admin', 'common'], // rol que tendra el usuario
  status: {
    status: Boolean, // campo de validacion de correo
    code: String // solo existe para validacion de correo o cambio contrasena
  },
  direccion: {
    provincia: String,
    distrito: String,
    corregimiento: String,
    detalles: String
  }
});

module.exports = Usuario;
