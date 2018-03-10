'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('ComputersDisks', [
      { brandId: 1, name: 'N/A', space: "N/A", description: null },
      { brandId: 3, name: 'Barracuda 7200.14', space: "3TB", description: "http://hdd.userbenchmark.com/Seagate-Barracuda-720014-3TB/Rating/1374" },
      { brandId: 3, name: 'Red Pro 4TB (2014)', space: "N/A", description: "http://hdd.userbenchmark.com/WD-Red-Pro-4TB-2014/Rating/2664" },
      { brandId: 14, name: 'DT01ACA300 3TB', space: "3TB", description: "http://hdd.userbenchmark.com/Seagate-Barracuda-720014-3TB/Rating/1374" },
      { brandId: 15, name: 'Desktop SSHD 4TB', space: "3TB", description: "http://hdd.userbenchmark.com/Seagate-Desktop-SSHD-4TB/Rating/2668" },
      { brandId: 16, name: 'Deskstar NAS 4TB', space: "4TB", description: "http://hdd.userbenchmark.com/HGST-Deskstar-NAS-4TB/Rating/1971" },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('ComputersDisks', null, {});
  }
};