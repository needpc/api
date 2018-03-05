'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('ComputersGraphics', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      brand_id: {
        type: Sequelize.INTEGER,
        references: { model: 'ComputersBrands', key: 'id' },
        allowNull: true
      },
      model: {
        type: Sequelize.STRING(255),
        allowNull: false
      },
      picture: {
        type: Sequelize.STRING(2048),
        allowNull: true
      },
      description: {
        type: Sequelize.STRING(1024),
        allowNull: true
      },
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('ComputersGraphics');
  }
};