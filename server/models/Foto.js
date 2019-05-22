module.exports = (sequelize, DataTypes) => {
  const Foto = sequelize.define('Foto', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },

    foto: DataTypes.BLOB
  });

  return Foto;
};
