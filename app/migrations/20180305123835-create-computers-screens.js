'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('ComputersScreens', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      type: {
        type: Sequelize.STRING(256),
        allowNull: true
      },
      resolution: {
        type: Sequelize.STRING(16),
        allowNull: true
      },
      size: {
        type: Sequelize.STRING(16),
        allowNull: true
      },
      refresh_rate: {
        type: Sequelize.INTEGER,
        allowNull: true
      },
      description: {
        type: Sequelize.STRING(512),
        allowNull: true
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('ComputersScreens');
  }
};