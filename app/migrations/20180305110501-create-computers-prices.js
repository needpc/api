'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('computers_prices', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      computerid: {
        type: Sequelize.INTEGER,
        references: { 
          model: 'computers', 
          key: 'id'
        },
        allowNull: false
      },
      traderid: {
        type: Sequelize.UUID,
        references: { 
          model: 'computers_traders', 
          key: 'id' 
        },
        allowNull: false
      },
      pricing: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      url: {
        type: Sequelize.STRING(512),
        allowNull: false
      },
      createdat: {
        allowNull: false,
        type: Sequelize.DATE
      },
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('computers_prices');
  }
};