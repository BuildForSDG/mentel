"use strict";

module.exports = function (sequelize, DataTypes) {
  var Health = sequelize.define('Healthprofessionals', {
    firstName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    phoneNumber: {
      type: DataTypes.STRING,
      allowNull: false
    },
    medicalId: {
      type: DataTypes.STRING,
      allowNull: false
    },
    image: {
      type: DataTypes.STRING,
      allowNull: false
    },
    address: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });

  Health.associate = function (models) {
    Health.hasMany(models.Appointments, {
      onDelete: 'cascade'
    });
  };

  return Health;
};