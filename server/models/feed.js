module.exports = (sequelize, DataTypes) => {
  const Feed = sequelize.define('Feeds', {
    post: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  Feed.associate = (models) => {
    Feed.belongsTo(models.Clients, {
      foreignKey: {
        allowNull: false,
      },
    });
  };
  return Feed;
};
