'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('ComputersQuestsResps', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      quest_id: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      resp: {
        type: Sequelize.STRING(32),
        allowNull: false
      },
      indice: {
        type: Sequelize.STRING(32),
        allowNull: false
      },
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('ComputersQuestsResps');
  }
};