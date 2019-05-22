const Sequelize = require('sequelize');
const fs = require('fs');
const path = require('path');

const config = require('../config/databaseConfig');

const basename = path.basename(__filename);

const db = {};

const sequelize = new Sequelize(config.database, config.username, config.password, config, {
  operatorAliases: Sequelize.Op
});

fs.readdirSync(__dirname)
  .filter(file => {
    return file.indexOf('.') !== 0 && file !== basename && file.slice(-3) === '.js';
  })
  .forEach(file => {
    const model = sequelize.import(path.join(__dirname, file));
    db[model.name] = model;
  });

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

sequelize
  .sync({
    force: true
  })
  .then(() => {
    console.log('Conexion exitosa');
  });

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
