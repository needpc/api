'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('ComputersTraders', [
      { name: 'LDLC', description: null },
      { name: 'Fnac', description: null },
      { name: 'Materiel.NET', description: null },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('ComputersTraders', null, {});
  }
};
