'use strict';
module.exports = (sequelize, DataTypes) => {
  var computers_gpus = sequelize.define('computers_gpus', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    name: {
      type: DataTypes.STRING(128),
      allowNull: false
    },
    description: {
      type: DataTypes.STRING(1024),
      allowNull: false
    },
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return computers_gpus;
};