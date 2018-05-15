'use strict';
module.exports = (sequelize, DataTypes) => {
  var computers_quests = sequelize.define('computers_quests', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    activityid: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    rank: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
    quest: {
      type: DataTypes.STRING(512),
      allowNull: false
    },
    domain: {
      type: DataTypes.STRING(64),
      allowNull: false
    },
    createdat: {
      allowNull: false,
      type: DataTypes.DATE
    },
    updatedat: {
      allowNull: false,
      type: DataTypes.DATE
    }
  }, {
    classMethods: {
      associate: function(models) {
        computers_quests.belongsTo(models.computers_activities);
      }
    }
  });
  return computers_quests;
};