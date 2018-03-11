'use strict';
module.exports = (sequelize, DataTypes) => {
  var users_roles = sequelize.define('users_roles', {
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
      type: DataTypes.STRING(64),
      allowNull: true
    }
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return users_roles;
};