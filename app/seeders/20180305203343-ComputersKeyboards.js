'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('ComputersKeyboards', [
      { name: 'AZERTY', description: 'FR' },
      { name: 'QWERTY', description: 'US' },
      { name: 'QWERTZ', description: 'GB' }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('ComputersKeyboards', null, {});
  }
};
