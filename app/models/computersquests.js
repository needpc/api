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
      type: DataTypes.INTEGER,
      allowNull: false
    },
    quest: {
      type: DataTypes.STRING(512),
      allowNull: false
    },
    domain: {
      type: DataTypes.STRING(16),
      allowNull: true
    },
  }, {
    timestamps: true,
    classMethods: {
      associate: function(models) {
        // computers_quests.belongsTo(models.computers_activities);
        computers_quests.hasMany(models.computers_quests_resps, { onDelete: 'CASCADE', foreignKey: 'questid' });
      }
    }
  });
  return computers_quests;
};