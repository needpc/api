'use strict';
module.exports = (sequelize, DataTypes) => {
  var ComputersCpus = sequelize.define('ComputersCpus', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    name: {
      type: DataTypes.STRING(128),
      allowNull: false
    },
    frequency: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    description: {
      type: DataTypes.STRING(512),
      allowNull: true
    }
  }, {
    classMethods: {
      associate: function(models) {
        // ComputersCpus.belongsTo(models.ComputersBrands);
      }
    }
  });
  return ComputersCpus;
};