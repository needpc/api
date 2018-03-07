'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('ComputersColors', [
      { name: 'N/A' },
      { name: 'Noir' },
      { name: 'Rouge' },
      { name: 'Vert' },
      { name: 'Bleu' },
      { name: 'Jaune' },
      { name: 'Gris' },
      { name: 'Rose' },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('ComputersColors', null, {});
  }
};
