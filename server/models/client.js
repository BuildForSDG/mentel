module.exports = (sequelize, DataTypes) => {
  const Client = sequelize.define("Clients", {
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    phoneNumber: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    address: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    isAdmin: {
      type: DataTypes.TINYINT,
    },
  });

  Client.associate = (models) => {
    Client.hasMany(models.Appointment, {
      onDelete: "cascade",
    });
    Client.hasOne(models.Profile, {
      onDelete: "cascade",
    });
  };

  return Client;
};
