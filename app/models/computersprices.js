'use strict';
module.exports = (sequelize, DataTypes) => {
  var computers_prices = sequelize.define('computers_prices', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    computerid: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    traderid: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    pricing: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    url: {
      type: DataTypes.STRING(512),
      allowNull: false
    },
    createdat: {
      allowNull: false,
      type: DataTypes.DATE
    },
  }, {
    classMethods: {
      associate: function(models) {
        computers_prices.belongsTo(models.computers_traders);
      }
    }
  });
  return computers_prices;
};