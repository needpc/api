'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('ComputersNetworks', [
      { name: '100', description: '100 Mbit/s' },
      { name: '1000', description: '1 Gbit/s' },
      { name: '10000', description: '10 Gbits' }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('ComputersNetworks', null, {});
  }
};
