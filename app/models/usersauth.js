'use strict';
module.exports = (sequelize, DataTypes) => {
  var UsersAuth = sequelize.define('UsersAuth', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    name: {
      type: DataTypes.STRING(32),
      allowNull: false
    },
    description: {
      type: DataTypes.STRING(128),
      allowNull: true,
    }
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return UsersAuth;
};