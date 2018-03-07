'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('ComputersCpus', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      brandId: {
        type: Sequelize.INTEGER,
        references: { model: 'ComputersBrands', key: 'id' },
        allowNull: true
      },
      name: {
        type: Sequelize.STRING(128),
        allowNull: false
      },
      frequency: {
        type: Sequelize.STRING(16),
        allowNull: true
      },
      description: {
        type: Sequelize.STRING(512),
        allowNull: true
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('ComputersCpus');
  }
};