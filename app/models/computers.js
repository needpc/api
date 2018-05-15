'use strict';
module.exports = (sequelize, DataTypes) => {
  var computers = sequelize.define('computers', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    osid: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 1
    },
    keyboardid: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 1
    },
    cpuid: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 1
    },
    screenid: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 1
    },
    graphicid: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 1
    },
    activityid: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 1
    },
    chipsetid: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 1
    },
    model: {
      type: DataTypes.STRING(256),
      allowNull: false,
      unique: 'uniqueTag',
    },
    picture: {
      type: DataTypes.STRING(512),
      allowNull: true
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
    memory_size: {
      type: DataTypes.STRING(128),
      allowNull: true,
    },
    memory_type: {
      type: DataTypes.STRING(128),
      allowNull: true,
    },
    memory_max_size: {
      type: DataTypes.STRING(128),
      allowNull: true,
    },
    network: {
      type: DataTypes.STRING(128),
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
    createdat: {
      allowNull: false,
      type: DataTypes.DATE
    },
    updatedat: {
      allowNull: false,
      type: DataTypes.DATE
    }
  }, {
    classMethods: {
      associate: function(models) {
        computers.belongsTo(models.computers_os, { onDelete: "CASCADE", foreignKey: 'osid' });
        computers.belongsTo(models.computers_keyboards, { onDelete: "CASCADE", foreignKey: 'keyboardid' });
        computers.belongsTo(models.computers_cpus, { onDelete: "CASCADE", foreignKey: 'cpuid' });
        computers.belongsTo(models.computers_screens, { onDelete: "CASCADE", foreignKey: 'screenid' });
        computers.belongsTo(models.computers_gpus, { onDelete: "CASCADE", foreignKey: 'gpuid' });
        computers.belongsTo(models.computers_activities, { onDelete: "CASCADE", foreignKey: 'activityid' });
        computers.belongsTo(models.computers_chipsets, { onDelete: "CASCADE", foreignKey: 'chipsetid' });
        computers.hasMany(models.computers_prices, { onDelete: 'CASCADE', foreignKey: 'computerid' });
      }
    }
  });
  return computers;
};