'use strict';
module.exports = (sequelize, DataTypes) => {
  var ComputersQuests = sequelize.define('ComputersQuests', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    activityId: {
      type: DataTypes.INTEGER,
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
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE
    }
  }, {
    classMethods: {
      associate: function(models) {
        ComputersQuests.belongsTo(models.ComputersActivities);
      }
    }
  });
  return ComputersQuests;
};