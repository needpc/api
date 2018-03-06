'use strict';
module.exports = (sequelize, DataTypes) => {
  var ComputersGraphics = sequelize.define('ComputersGraphics', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    model: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    picture: {
      type: DataTypes.STRING(2048),
      allowNull: false
    },
    description: {
      type: DataTypes.STRING(2048),
      allowNull: false
    },
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return ComputersGraphics;
};