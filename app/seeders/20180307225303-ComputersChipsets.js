'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('ComputersChipsets', [
      { brandId: 1, name: 'N/A', description: null },
      { brandId: 2, name: 'Intel® B250', description: null }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('ComputersChipsets', null, {});
  }
};
