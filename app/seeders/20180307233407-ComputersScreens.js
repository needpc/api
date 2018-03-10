'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('ComputersScreens', [
      { type: 'N/A', resolution: null, size: null, refresh_rate: null, description: null },
      { type: 'LCD', resolution: "1980/1080", size: "13", refresh_rate: 120, description: null },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('ComputersScreens', null, {});
  }
};
