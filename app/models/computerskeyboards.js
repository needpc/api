'use strict';
module.exports = (sequelize, DataTypes) => {
  var computers_keyboards = sequelize.define('computers_keyboards', {
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
    classMethods: {
      timestamps: false,
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return computers_keyboards;
};