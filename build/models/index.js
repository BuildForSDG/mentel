/* eslint strict: off */

/* eslint lines-around-directive: off */
'use strict';

var fs = require('fs');

var path = require('path');

var Sequelize = require('sequelize');

var basename = path.basename(__filename);
var env = process.env.NODE_ENV || 'development';
/* eslint prefer-template: off */

/* eslint no-path-concat: off */
// eslint-disable-next-line import/no-dynamic-require

var config = require(__dirname + '/../config/config.js')[env];

var db = {};
var sequelize;

if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(config.database, config.username, config.password,
  /* eslint comma-dangle: off */
  config);
}

fs.readdirSync(__dirname)
/* eslint arrow-body-style: off */
.filter(function (file) {
  return file.indexOf('.') !== 0 && file !== basename && file.slice(-3) === '.js';
}).forEach(function (file) {
  /* eslint dot-notation: off */
  var model = sequelize['import'](path.join(__dirname, file));
  db[model.name] = model;
});
Object.keys(db).forEach(function (modelName) {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});
db.sequelize = sequelize;
db.Sequelize = Sequelize;
module.exports = db;