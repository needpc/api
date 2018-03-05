'use strict';
module.exports = (sequelize, DataTypes) => {
  var ComputersCpus = sequelize.define('ComputersCpus', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    brand_id: {
      type: DataTypes.INTEGER,
      references: { model: 'UsersBrands', key: 'id' },
      allowNull: true
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
        // associations can be defined here
      }
    }
  });
  return ComputersCpus;
};