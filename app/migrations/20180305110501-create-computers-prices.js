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
      computer_id: {
        type: Sequelize.INTEGER,
        references: { 
          model: 'computers', 
          key: 'id'
        },
        allowNull: false
      },
      traderid: {
        type: Sequelize.INTEGER,
        references: { 
          model: 'computers_traders', 
          key: 'id' 
        },
        allowNull: false
      },
      pricing: {
        type: Sequelize.INTEGER,
        allowNull: true
      },
      url: {
        type: Sequelize.STRING(512),
        allowNull: true
      },
      created_at: Sequelize.DATE,
      updated_at: Sequelize.DATE,
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('computers_prices');
  }
};