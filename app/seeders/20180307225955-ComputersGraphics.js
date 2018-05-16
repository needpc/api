'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('computers_gpus', [
      { 
        name: 'N/A',
        description: null
      },
      { 
        name: 'Aucun',
        description: null
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('computers_gpus', null, {});
  }
};
