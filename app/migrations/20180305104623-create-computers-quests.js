'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('computers_quests', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      activityid: {
        type: Sequelize.INTEGER,
        references: { model: 'computers_activities', key: 'id' },
        allowNull: false
      },
      rank: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      quest: {
		    type: Sequelize.STRING(512),
        allowNull: false
      },
      domain: {
        type: Sequelize.STRING(16),
        allowNull: true
      },
      createdat: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedat: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('computers_quests');
  }
};