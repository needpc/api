'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('ComputersGraphics', [
      { brandId: 1, name: 'N/A', description: null },
      { brandId: 1, name: 'GTX 1070', description: null },
      { brandId: 4, name: 'RX 480', description: null },
      { brandId: 1, name: 'GTX 1080', description: null },
      { brandId: 1, name: 'GTX 1080 Ti', description: null },
      { brandId: 1, name: 'GTX 970', description: null },
      { brandId: 1, name: 'GTX 980 Ti', description: null },
      { brandId: 4, name: 'RX 470', description: null },
      { brandId: 4, name: 'R9 Fury-X', description: null },
      { brandId: 4, name: 'R9 270X', description: null },
      { brandId: 1, name: 'GTX 960', description: null },
      { brandId: 1, name: 'GTX 1050', description: null },
      { brandId: 1, name: 'GTX 780 Ti', description: null },
      { brandId: 4, name: 'HD 7950', description: null },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('ComputersGraphics', null, {});
  }
};
