module.exports = (sequelize, Sequelize) => {
  const Usuario = sequelize.define(
    'Usuario',
    {
      id: {
        type: Sequelize.UUID,
        primaryKey: true,
        defaultValue: Sequelize.UUIDV4
      },
      password: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
          notEmpty: {
            msg: 'Falta password'
          }
        }
      }
    },
    {
      freezeTableName: true,
      comment: 'Tabla de usuarios del proyecto Petlink'
    }
  );

  Usuario.associate = models => {
    Usuario.hasOne(models.Cliente, { foreignKey: 'usuarioId', onDelete: 'CASCADE' });
  };

  return Usuario;
};
