'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('computers_traders', [
      { name: 'LDLC', description: null },
      { name: 'Fnac', description: null },
      { name: 'Materiel.NET', description: null },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('computers_traders', null, {});
  }
};
