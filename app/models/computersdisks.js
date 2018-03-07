'use strict';
module.exports = (sequelize, DataTypes) => {
  var ComputersDisks = sequelize.define('ComputersDisks', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    brandId: {
      type: DataTypes.INTEGER,
      references: { model: 'ComputersBrands', key: 'id' },
      allowNull: true
    },
    model: {
      type: DataTypes.STRING(256),
      allowNull: false
    },
    space: {
      type: DataTypes.STRING(64),
      allowNull: true
    },
    description: {
      type: DataTypes.STRING(512),
      allowNull: true
    },
  }, {
    classMethods: {
      associate: function(models) {
        ComputersDisks.belongsTo(models.ComputersBrands);
      }
    }
  });
  return ComputersDisks;
};