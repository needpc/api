'use strict';
module.exports = (sequelize, DataTypes) => {
  var computers_prices = sequelize.define('computers_prices', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    computer_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    trader_id: {
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
    created_at: DataTypes.DATE,
    updated_at: DataTypes.DATE,
  }, {
    classMethods: {
      associate: function(models) {
        computers_prices.belongsTo(models.computers_traders);
      }
    }
  });
  return computers_prices;
};