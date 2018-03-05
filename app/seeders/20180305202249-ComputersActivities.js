'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('ComputersActivities', [
        { name: 'N/A', description: null },
        { name: 'Jeux', description: null },
        { name: 'Bureautique', description: null },
        { name: 'Pro', description: null }
      ], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('ComputersActivities', null, {});
  }
};
