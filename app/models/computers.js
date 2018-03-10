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
      allowNull: true,
      defaultValue: 1
    },
    osId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 1
    },
    keyboardId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 1
    },
    cpuId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 1
    },
    colorId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 1
    },
    screenId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 1
    },
    graphicId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 1
    },
    diskId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 1
    },
    activityId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 1
    },
    networkId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 1
    },
    chipsetId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 1
    },
    priceId: {
      type: DataTypes.INTEGER,
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
    weight: {
      type: DataTypes.STRING(16),
      allowNull: true,
    },
    length: {
      type: DataTypes.STRING(16),
      allowNull: true,
    },
    width: {
      type: DataTypes.STRING(16),
      allowNull: true,
    },
    height: {
      type: DataTypes.STRING(16),
      allowNull: true,
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
        Computers.belongsTo(models.ComputersBrands, { onDelete: "CASCADE", foreignKey: 'brandId' });
        Computers.belongsTo(models.ComputersOs, { onDelete: "CASCADE", foreignKey: 'osId' });
        Computers.belongsTo(models.ComputersKeyboards, { onDelete: "CASCADE", foreignKey: 'keyboardId' });
        Computers.belongsTo(models.ComputersCpus, { onDelete: "CASCADE", foreignKey: 'cpuId' });
        Computers.belongsTo(models.ComputersScreens, { onDelete: "CASCADE", foreignKey: 'screenId' });
        Computers.belongsTo(models.ComputersGraphics, { onDelete: "CASCADE", foreignKey: 'graphicId' });
        Computers.belongsTo(models.ComputersDisks, { onDelete: "CASCADE", foreignKey: 'diskId' });
        Computers.belongsTo(models.ComputersActivities, { onDelete: "CASCADE", foreignKey: 'activityId' });
        Computers.belongsTo(models.ComputersNetworks, { onDelete: "CASCADE", foreignKey: 'networkId' });
        Computers.belongsTo(models.ComputersChipsets, { onDelete: "CASCADE", foreignKey: 'chipsetId' });
        Computers.hasMany(models.ComputersPrices, { onDelete: 'CASCADE', foreignKey: 'computerId' });
      }
    }
  });
  return Computers;
};