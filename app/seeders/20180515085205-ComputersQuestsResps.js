'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('computers_quests_resps', [
      { 
        questid: 1,
        resp: "Jouer",
        indice: 2
      },
      { 
        questid: 1,
        resp: "Bureautique",
        indice: 3
      },
      { 
        questid: 1,
        resp: "Multimédia",
        indice: 4
      },
      { 
        questid: 2,
        resp: "Assassin's Creed",
        indice: 13
      },
      { 
        questid: 2,
        resp: "Minecraft",
        indice: 15
      },
      { 
        questid: 2,
        resp: "Vermintide 2",
        indice: 17
      },
      { 
        questid: 3,
        resp: "13 pouces",
        indice: 13
      },
      { 
        questid: 3,
        resp: "15 pouces",
        indice: 15
      },
      { 
        questid: 3,
        resp: "17 pouces",
        indice: 17
      },
      { 
        questid: 4,
        resp: "Minimale",
        indice: 4000
      },
      { 
        questid: 4,
        resp: "Moyenne",
        indice: 8000
      },
      { 
        questid: 4,
        resp: "Haute",
        indice: 12000
      },
      { 
        questid: 5,
        resp: "Moins de 300€",
        indice: 150
      },
      { 
        questid: 5,
        resp: "Entre 300€ et 600€",
        indice: 450
      },
      { 
        questid: 5,
        resp: "600€ et 900€",
        indice: 750
      },
      { 
        questid: 5,
        resp: "Plus de 1000€",
        indice: 1050
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('computers_quests_resps', null, {});
  }
};
