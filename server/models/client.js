module.exports = (sequelize, DataTypes) => {
  const Client = sequelize.define("clients", {
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
    Client.hasMany(models.appointment, {
      onDelete: "cascade",
    });
    Client.hasOne(models.profile, {
      onDelete: "cascade",
    });
  };

  return Client;
};
