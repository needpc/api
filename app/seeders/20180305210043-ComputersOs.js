'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('ComputersOs', [
      { name: 'Windows', description: "7, 8, 10" },
      { name: 'MacOS', description: "Darwin" },
      { name: 'Linux', description: "Ubuntu, Fedora, Debian ..." },
      { name: 'Libre', description: 'Pas d\'OS installe' }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('ComputersOs', null, {});
  }
};
