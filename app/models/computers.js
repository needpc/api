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
    PriceId: {
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
        Computers.belongsTo(models.ComputersBrands, { onDelete: "CASCADE", foreignKey: { allowNull: false } });
        Computers.belongsTo(models.ComputersOs, { onDelete: "CASCADE", foreignKey: { allowNull: false } });
        Computers.belongsTo(models.ComputersKeyboards, { onDelete: "CASCADE", foreignKey: { allowNull: false } });
        Computers.belongsTo(models.ComputersCpus, { onDelete: "CASCADE", foreignKey: { allowNull: false } });
        Computers.belongsTo(models.ComputersScreens, { onDelete: "CASCADE", foreignKey: { allowNull: false } });
        Computers.belongsTo(models.ComputersGraphics, { onDelete: "CASCADE", foreignKey: { allowNull: false } });
        Computers.belongsTo(models.ComputersDisks, { onDelete: "CASCADE", foreignKey: { allowNull: false } });
        Computers.belongsTo(models.ComputersActivities, { onDelete: "CASCADE", foreignKey: { allowNull: false } });
        Computers.belongsTo(models.ComputersNetworks, { onDelete: "CASCADE", foreignKey: { allowNull: false } });
        Computers.belongsTo(models.ComputersChipsets, { onDelete: "CASCADE", foreignKey: { allowNull: false } });
      }
    }
  });
  return Computers;
};