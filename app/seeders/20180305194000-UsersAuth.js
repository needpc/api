'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('UsersAuth', [{
        name: 'local',
        description: 'Local auth'
      },
      {
        name: 'twitter',
        description: 'Twitter oauth2'        
      },
      {
        name: 'facebook',
        description: 'Facebook oauth2'        
      }], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('UsersAuth', null, {});
  }
};
