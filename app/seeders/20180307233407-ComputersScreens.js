'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('computers_screens', [
      { type: 'N/A', resolution: null, size: null, refresh_rate: null, description: null },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('computers_screens', null, {});
  }
};
