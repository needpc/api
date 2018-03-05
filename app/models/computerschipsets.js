'use strict';
module.exports = (sequelize, DataTypes) => {
  var ComputersChipsets = sequelize.define('ComputersChipsets', {}, {});
  ComputersChipsets.associate = function(models) {
    // associations can be defined here
  };
  return ComputersChipsets;
};