module.exports = (sequelize, DataTypes) => {
  const Appointment = sequelize.define('Appointments', {
    message: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Healthprofessional: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  });

  Appointment.associate = (models) => {
    Appointment.belongsTo(models.Clients, {
      foreignKey: {
        allowNull: false,
      },
    });
  };
  return Appointment;
};
