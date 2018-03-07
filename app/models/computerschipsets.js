'use strict';
module.exports = (sequelize, DataTypes) => {
  var ComputersChipsets = sequelize.define('ComputersChipsets', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER
    },
    brand_id: {
      type: Sequelize.INTEGER,
      references: { model: 'ComputersBrands', key: 'id' },
      allowNull: false
    },
    name: {
      type: Sequelize.STRING(64),
      allowNull: true
    },
    description: {
      type: Sequelize.STRING(512),
      allowNull: true
    }
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return ComputersChipsets;
};