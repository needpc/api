'use strict';
module.exports = function(sequelize, DataTypes) {
  var users = sequelize.define('users', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    auth_id: {
      type: DataTypes.INTEGER,
      references: { 
        model: 'users_auth', 
        key: 'id' 
      },
      allowNull: false,
      defaultValue: 1
    },
    role: {
      type: DataTypes.ENUM,
      values: ['admin', 'modo', 'user'],
      allowNull: false
    },
    firstname: {
      type: DataTypes.STRING(128),
      allowNull: false
    },
    lastname: {
      type: DataTypes.STRING(256),
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING(255),
      allowNull: false,
      validate: {
        isEmail: true
      }
    },
    password: {
      type: DataTypes.STRING(1024),
      allowNull: false,
    },
    active: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true
    },
    created_at: DataTypes.DATE,
    updated_at: DataTypes.DATE,
  }, {
    classMethods: {
      associate: function(models) {
        users.belongsTo(models.users_auth);
      }
    }
  });
  return users;
};