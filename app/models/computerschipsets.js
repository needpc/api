'use strict';
module.exports = (sequelize, DataTypes) => {
  var ComputersChipsets = sequelize.define('ComputersChipsets', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    brandId: {
      type: DataTypes.INTEGER,
      references: { model: 'ComputersBrands', key: 'id' },
      allowNull: false
    },
    name: {
      type: DataTypes.STRING(64),
      allowNull: true
    },
    description: {
      type: DataTypes.STRING(512),
      allowNull: true
    }
  }, {
    classMethods: {
      associate: function(models) {
        ComputersChipsets.belongsTo(models.ComputersBrands);
      }
    }
  });
  return ComputersChipsets;
};