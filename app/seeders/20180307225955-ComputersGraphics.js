'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('ComputersGraphics', [
      { name: 'N/A', description: null },
      { name: 'GTX 1070', description: null },
      { name: 'RX 480', description: null },
      { name: 'GTX 1080', description: null },
      { name: 'GTX 1080 Ti', description: null },
      { name: 'GTX 970', description: null },
      { name: 'GTX 980 Ti', description: null },
      { name: 'RX 470', description: null },
      { name: 'R9 Fury-X', description: null },
      { name: 'R9 270X', description: null },
      { name: 'GTX 960', description: null },
      { name: 'GTX 1050', description: null },
      { name: 'GTX 780 Ti', description: null },
      { name: 'HD 7950', description: null },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('ComputersGraphics', null, {});
  }
};
