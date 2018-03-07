'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('ComputersCpus', [
      { brandId: 1, name: 'N/A', frequency: 'N/A', description: null },
      { brandId: 2, name: 'Intel Core i7-8700K', frequency: '3.40GHz', description: 'http://cpu.userbenchmark.com/Intel-Core-i7-8700K/Rating/3937' },
      { brandId: 4, name: 'AMD Ryzen 5 1600', frequency: '3.20GHz', description: 'http://cpu.userbenchmark.com/AMD-Ryzen-5-1600/Rating/3919' },
      { brandId: 2, name: 'Intel Core i7-2600K', frequency: '3.40GHz', description: 'http://cpu.userbenchmark.com/Intel-Core-i7-2600K/Rating/621' },
      { brandId: 2, name: 'Intel Core i3-7100U', frequency: '2.40GHz', description: 'http://cpu.userbenchmark.com/SpeedTest/176913/IntelR-CoreTM-i3-7100U-CPU---240GHz' },
      { brandId: 4, name: 'AMD Ryzen 3 2200G', frequency: 'N/A', description: 'http://cpu.userbenchmark.com/SpeedTest/441832/AMD-Ryzen-3-2200G-with-Radeon-Vega-Graphics' },
      { brandId: 2, name: 'Intel Core i7-4930K', frequency: '3.40GHz', description: 'http://cpu.userbenchmark.com/Intel-Core-i7-4930K/Rating/1976' },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('ComputersCpus', null, {});
  }
};
