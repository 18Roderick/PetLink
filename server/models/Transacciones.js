module.exports = (sequelize, DataTypes) => {
  const Transacciones = sequelize.define(
    'Transacciones',
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
      },

      fecha: {
        type: DataTypes.DATE,
        allowNull: false
      },

      detalles: {
        type: DataTypes.TEXT,
        allowNull: true
      }
    },
    {
      timestamps: false
    }
  );

  return Transacciones;
};
