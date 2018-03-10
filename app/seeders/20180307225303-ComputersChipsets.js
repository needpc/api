'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('ComputersChipsets', [
      { name: 'N/A', description: null },
      { name: 'Intel® B250', description: null }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('ComputersChipsets', null, {});
  }
};
