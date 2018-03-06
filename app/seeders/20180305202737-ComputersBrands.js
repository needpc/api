'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('ComputersBrands', [
        { name: 'N/A', description: null },
        { name: 'Intel', description: null },
        { name: 'Western Digital', description: null },
        { name: 'AMD', description: null },
        { name: 'Acer', description: null },
        { name: 'Asus', description: null },
        { name: 'HP', description: null },
        { name: 'Samsung', description: null },
        { name: 'Apple', description: null },
      ], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('ComputersBrands', null, {});
  }
};
