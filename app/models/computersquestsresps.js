'use strict';
module.exports = (sequelize, DataTypes) => {
  var ComputersTraders = sequelize.define('ComputersQuestsResps', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    quest_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    resp: {
      type: DataTypes.STRING(32),
      allowNull: false
    },
    indice: {
      type: DataTypes.STRING(32),
      allowNull: false
    },
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return ComputersTraders;
};