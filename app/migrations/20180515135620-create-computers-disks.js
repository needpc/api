'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('computers_disks', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      type: {
        type: Sequelize.ENUM,
        values: ['N/A', 'HDD', 'SSD'],
        allowNull: true
      },
      size: {
        type: Sequelize.INTEGER,
        allowNull: true
      },
      interface: {
        type: Sequelize.STRING(1024),
        allowNull: true
      }
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('computers_disks');
  }
};
