'use strict';
module.exports = (sequelize, DataTypes) => {
  var ComputersNetworks = sequelize.define('ComputersNetworks', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    name: {
      type: DataTypes.STRING(64),
      allowNull: false
    },
    description: {
      type: DataTypes.STRING(128),
      allowNull: true
    }
  }, {
    timestamps: false,
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return ComputersNetworks;
};