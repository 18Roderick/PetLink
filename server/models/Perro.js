module.exports = (sequelize, DataTypes) => {
  const Perro = sequelize.define('perro', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: false
    },
    raza: {
      type: DataTypes.STRING,
      allowNull: false
    },
    sexo: {
      type: DataTypes.CHAR(1),
      allowNull: false
    },
    descripcion: {
      type: DataTypes.TEXT
    },
    estado: {
      type: DataTypes.CHAR(10)
    },
    recomendadoN: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    recomendadoA: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    }
  });

  Perro.associate = models => {
    Perro.belongsTo(models.Cliente, { foreignKey: 'clienteId', onDelete: 'CASCADE' });
    Perro.hasMany(models.Foto, { foreignKey: 'clienteId', onDelete: 'CASCADE' });
  };
  return Perro;
};
