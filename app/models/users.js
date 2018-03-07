'use strict';
module.exports = function(sequelize, DataTypes) {
  var Users = sequelize.define('Users', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    roleId: {
      type: DataTypes.INTEGER,
      references: { model: 'UsersRoles', key: 'id' },
      allowNull: false,
      defaultValue: 1
    },
    authId: {
      type: DataTypes.INTEGER,
      references: { model: 'UsersAuth', key: 'id' },
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
        Users.belongsTo(models.UsersRoles);
        Users.belongsTo(models.UsersAuth);
      }
    }
  });
  return Users;
};