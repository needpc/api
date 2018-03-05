'use strict';
module.exports = (sequelize, DataTypes) => {
  var ComputersDisks = sequelize.define('ComputersDisks', {
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
    model: {
      type: DataTypes.STRING(256),
      allowNull: false
    },
    space: {
      type: DataTypes.STRING(64),
      allowNull: true
    },
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return ComputersDisks;
};