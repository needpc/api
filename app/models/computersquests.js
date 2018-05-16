'use strict';
module.exports = (sequelize, DataTypes) => {
  var computers_quests = sequelize.define('computers_quests', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    activity_id: {
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
    created_at: DataTypes.DATE,
    updated_at: DataTypes.DATE,
  }, {
    classMethods: {
      associate: function(models) {
        // computers_quests.belongsTo(models.computers_activities);
        computers_quests.hasMany(models.computers_quests_resps, { onDelete: 'CASCADE', foreignKey: 'quest_id' });
      }
    }
  });
  return computers_quests;
};