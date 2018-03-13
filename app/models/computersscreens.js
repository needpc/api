'use strict';
module.exports = (sequelize, DataTypes) => {
  var computers_screens = sequelize.define('computers_screens', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    type: {
      type: DataTypes.STRING(256),
      allowNull: true
    },
    resolution: {
      type: DataTypes.STRING(16),
      allowNull: true
    },
    size: {
      type: DataTypes.STRING(16),
      allowNull: true
    },
    refresh_rate: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    description: {
      type: DataTypes.STRING(512),
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
  return computers_screens;
};