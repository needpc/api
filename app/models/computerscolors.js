'use strict';
module.exports = (sequelize, DataTypes) => {
  var computers_colors = sequelize.define('computers_colors', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    name: {
      type: DataTypes.STRING(64),
      allowNull: false
    }
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return computers_colors;
};