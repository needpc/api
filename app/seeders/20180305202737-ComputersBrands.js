'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('ComputersBrands', [
        { name: 'N/A', description: null },
        { name: 'Intel', description: "Fabrication CPU, chipset ..." },
        { name: 'Western Digital', description: "Fabrication de disques dur" },
        { name: 'AMD', description: "fabrication de CPU" },
        { name: 'Acer', description: "Fabrication PC" },
        { name: 'Asus', description: "Fabrication PC, GPU" },
        { name: 'HP', description: "Manifacture, fabrication PC etc" },
        { name: 'Samsung', description: "Manifacture, fabrication PC etc" },
        { name: 'Apple', description: "Macintosh" },
        { name: 'Qualcomm', description: "Fabrication chipset, network" },
        { name: 'Broadcom', description: "Fabrication chipset, network" },
        { name: 'MediaTek', description: "Fabrication chipset" },
        { name: 'VIA Technologies', description: "Fabrication chipset" },
        { name: 'Lenovo', description: "Fabrication PC" },
        { name: 'Toshiba', description: "Fabrication PC, disques" },
        { name: 'Seagate', description: "Fabrication disques" },
        { name: 'HGST', description: "Fabrication disques" },
        { name: 'Nvidia', description: "Fabrication GPU" },
      ], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('ComputersBrands', null, {});
  }
};
