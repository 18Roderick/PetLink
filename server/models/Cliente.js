module.exports = (Sequelize, DataTypes) => {
  const Cliente = Sequelize.define('Cliente', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },

    nombre: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          msg: 'Falta Nombre'
        }
      }
    },

    apellido: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          msg: 'Falta apellido'
        }
      }
    },

    nacimiento: {
      type: DataTypes.DATE,
      validate: {
        notEmpty: {
          msg: 'Falta fecha de nacimiento'
        }
      }
    },

    correo: {
      type: DataTypes.STRING,
      unique: true,
      valide: {
        isEmail: true,
        notEmpty: {
          msg: 'Falta correo'
        }
      }
    },

    foto: {
      type: DataTypes.BLOB,
      allowNull: true
    },

    provincia: {
      type: DataTypes.STRING,
      allowNull: true
    },

    distrito: {
      type: DataTypes.STRING,
      allowNull: true
    },

    corregimiento: {
      type: DataTypes.STRING,
      allowNull: true
    },

    detallesDireccion: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  });

  Cliente.associate = models => {
    Cliente.belongsTo(models.Usuario, { foreignKey: 'usuarioId', onDelete: 'CASCADE' });
  };

  return Cliente;
};
