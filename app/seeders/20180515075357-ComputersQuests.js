'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('computers_quests', [
      { 
        activity_id: 3,
        rank: 1, 
        quest: "Quelle utilisation faites-vous de votre ordinateur ?", 
        domain: "activity",
        created_at: "NOW()",
        updated_at: "NOW()"
      },
      { 
        activity_id: 3,
        rank: 2, 
        quest: "A quel type de jeu jouez-vous ?",
        domain: "cpuscore",
        created_at: "NOW()",
        updated_at: "NOW()"
      },
      { 
        activity_id: 3,
        rank: 3, 
        quest: "Quel taille d'écran désirez-vous ?",
        domain: "screensize",
        created_at: "NOW()",
        updated_at: "NOW()"
      },
      { 
        activity_id: 3,
        rank: 4, 
        quest: "Quelle est la qualité graphique minimum que vous désirez ?",
        domain: "gpuscore",
        created_at: "NOW()",
        updated_at: "NOW()"
      },
      { 
        activity_id: 3,
        rank: 5, 
        quest: "Quel est votre budget ?",
        domain: "pricing",
        created_at: "NOW()",
        updated_at: "NOW()"
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('computers_quests', null, {});
  }
};
