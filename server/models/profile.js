module.exports = (sequelize, DataTypes) => {
  const Profile = sequelize.define("profile", {
    image: {
      type: DataTypes.STRING,
    },
    userName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
  return Profile;
};
