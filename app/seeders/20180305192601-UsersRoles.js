'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('users_roles', [{
        name: 'user',
        description: 'users class'
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
      return queryInterface.bulkDelete('users_roles', null, {});
  }
};
