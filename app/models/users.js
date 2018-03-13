'use strict';
module.exports = function(sequelize, DataTypes) {
  var users = sequelize.define('users', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    roleId: {
      type: DataTypes.INTEGER,
      references: { model: 'users_roles', key: 'id' },
      allowNull: false,
      defaultValue: 1
    },
    authId: {
      type: DataTypes.INTEGER,
      references: { model: 'users_auth', key: 'id' },
      allowNull: false,
      defaultValue: 1
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

  }, {
    timestamps: true,
    classMethods: {
      associate: function(models) {
        users.belongsTo(models.users_roles);
        users.belongsTo(models.users_auth);
      }
    }
  });
  return users;
};