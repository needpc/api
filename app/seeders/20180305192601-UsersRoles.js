'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('UsersRoles', [{
        name: 'user',
        description: 'Users class'
      },
      {
        name: 'moderator',
        description: 'Moderator class'
      },
      {
        name: 'admin',
        description: 'Admin class'
      }], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('UsersRoles', null, {});
  }
};
