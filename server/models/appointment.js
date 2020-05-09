module.exports = (sequelize, DataTypes) => {
  const Appointment = sequelize.define("Appointment", {
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
    Appointment.belongsTo(models.healthprofessional, {
      foreignKey: {
        allowNull: false,
      },
    });
  };
  return Appointment;
};
