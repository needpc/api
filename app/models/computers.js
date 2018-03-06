'use strict';
module.exports = (sequelize, DataTypes) => {
  var Computers = sequelize.define('Computers', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    brandId: {
      type: DataTypes.INTEGER,
      references: { model: 'ComputersBrands', key: 'id' },
      allowNull: true,
      defaultValue: 1
    },
    osId: {
      type: DataTypes.INTEGER,
      references: { model: 'ComputersOs', key: 'id' },
      allowNull: true,
      defaultValue: 1
    },
    keyboardId: {
      type: DataTypes.INTEGER,
      references: { model: 'ComputersKeyboards', key: 'id' },
      allowNull: true,
      defaultValue: 1
    },
    cpuId: {
      type: DataTypes.INTEGER,
      references: { model: 'ComputersCpus', key: 'id' },
      allowNull: true,
      defaultValue: 1
    },
    colorId: {
      type: DataTypes.INTEGER,
      references: { model: 'ComputersColors', key: 'id' },
      allowNull: true,
      defaultValue: 1
    },
    screenId: {
      type: DataTypes.INTEGER,
      references: { model: 'ComputersScreens', key: 'id' },
      allowNull: true,
      defaultValue: 1
    },
    graphicId: {
      type: DataTypes.INTEGER,
      references: { model: 'ComputersGraphics', key: 'id' },
      allowNull: true,
      defaultValue: 1
    },
    diskId: {
      type: DataTypes.INTEGER,
      references: { model: 'ComputersDisks', key: 'id' },
      allowNull: true,
      defaultValue: 1
    },
    activityId: {
      type: DataTypes.INTEGER,
      references: { model: 'ComputersActivities', key: 'id' },
      allowNull: true,
      defaultValue: 1
    },
    networkId: {
      type: DataTypes.INTEGER,
      references: { model: 'ComputersNetworks', key: 'id' },
      allowNull: true,
      defaultValue: 1
    },
    chipsetId: {
      type: DataTypes.INTEGER,
      references: { model: 'ComputersChipsets', key: 'id' },
      allowNull: true,
      defaultValue: 1
    },
    picture: {
      type: DataTypes.STRING(512),
      allowNull: true
    },
    designation: {
      type: DataTypes.STRING(256),
      allowNull: true,
    },
    model: {
      type: DataTypes.STRING(256),
      allowNull: false,
      unique: 'uniqueTag',
    },
    connector_available: {
      type: DataTypes.STRING(2048),
      allowNull: true,
    },
    url: {
      type: DataTypes.STRING(2048),
      allowNull: false,
    },
    weight: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },
    length: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    width: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    height: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    os_included: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    webcam: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true
    },
    wifi: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true
    },
    garanty: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    active: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true
    },
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE
    }
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Computers;
};