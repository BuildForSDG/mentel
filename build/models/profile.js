"use strict";

module.exports = function (sequelize, DataTypes) {
  var Profile = sequelize.define('Profiles', {
    image: {
      type: DataTypes.STRING
    },
    userName: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });

  Profile.associate = function (models) {
    Profile.belongsTo(models.Clients, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  return Profile;
};