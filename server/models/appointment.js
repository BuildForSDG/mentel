module.exports = (sequelize, DataTypes) => {
  const Appointment = sequelize.define("appointment", {
    message: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
  return Appointment;
};
