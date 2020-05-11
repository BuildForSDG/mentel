module.exports = (sequelize, DataTypes) => {
  const Appointment = sequelize.define('Appointments', {
    message: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  Appointment.associate = (models) => {
    Appointment.belongsTo(models.Clients, {
      foreignKey: {
        allowNull: false,
      },
    });
    Appointment.belongsTo(models.Healthprofessionals, {
      foreignKey: {
        allowNull: false,
      },
    });
  };
  return Appointment;
};
