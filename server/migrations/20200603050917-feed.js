/* eslint strict: off */
/* eslint lines-around-directive: off */
'use strict';

module.exports = {
  /* eslint arrow-body-style: off */
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
    return queryInterface.createTable('Feeds', {
      id: {
        type: Sequelize.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      post: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
      },
      createdAt: {
        type: Sequelize.DataTypes.DATE,
        allowNull: false,
      },
      updatedAt: {
        type: Sequelize.DataTypes.DATE,
        allowNull: false,
      },
      ClientId: {
        type: Sequelize.DataTypes.INTEGER,
        onDelete: 'CASCADE',
        allowNull: false,
        references: {
          model: 'Clients',
        },
        key: 'id',
      },
    });
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
    return queryInterface.dropTable('Feeds');
  },
};
