"use strict";

module.exports = function (sequelize, DataTypes) {
  var Appointment = sequelize.define('Appointments', {
    message: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });

  Appointment.associate = function (models) {
    Appointment.belongsTo(models.Clients, {
      foreignKey: {
        allowNull: false
      }
    });
    Appointment.belongsTo(models.Healthprofessionals, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  return Appointment;
};