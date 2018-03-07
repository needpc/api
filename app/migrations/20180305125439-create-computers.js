'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Computers', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      brandId: {
        type: Sequelize.INTEGER,
        references: { model: 'ComputersBrands', key: 'id' },
        allowNull: true,
        defaultValue: 1
      },
      osId: {
        type: Sequelize.INTEGER,
        references: { model: 'ComputersOs', key: 'id' },
        allowNull: true,
        defaultValue: 1
      },
      keyboardId: {
        type: Sequelize.INTEGER,
        references: { model: 'ComputersKeyboards', key: 'id' },
        allowNull: true,
        defaultValue: 1
      },
      cpuId: {
        type: Sequelize.INTEGER,
        references: { model: 'ComputersCpus', key: 'id' },
        allowNull: true,
        defaultValue: 1
      },
      colorId: {
        type: Sequelize.INTEGER,
        references: { model: 'ComputersColors', key: 'id' },
        allowNull: true,
        defaultValue: 1
      },
      screenId: {
        type: Sequelize.INTEGER,
        references: { model: 'ComputersScreens', key: 'id' },
        allowNull: true,
        defaultValue: 1
      },
      graphicId: {
        type: Sequelize.INTEGER,
        references: { model: 'ComputersGraphics', key: 'id' },
        allowNull: true,
        defaultValue: 1
      },
      diskId: {
        type: Sequelize.INTEGER,
        references: { model: 'ComputersDisks', key: 'id' },
        allowNull: true,
        defaultValue: 1
      },
      activityId: {
        type: Sequelize.INTEGER,
        references: { model: 'ComputersActivities', key: 'id' },
        allowNull: true,
        defaultValue: 1
      },
      networkId: {
        type: Sequelize.INTEGER,
        references: { model: 'ComputersNetworks', key: 'id' },
        allowNull: true,
        defaultValue: 1
      },
      chipsetId: {
        type: Sequelize.INTEGER,
        references: { model: 'ComputersChipsets', key: 'id' },
        allowNull: true,
        defaultValue: 1
      },
      priceId: {
        type: Sequelize.INTEGER,
        references: { model: 'ComputersPrices', key: 'computerId' },
        allowNull: true,
        defaultValue: 1
      },
      picture: {
        type: Sequelize.STRING(512),
        allowNull: true
      },
      designation: {
        type: Sequelize.STRING(256),
        allowNull: true,
      },
      model: {
        type: Sequelize.STRING(256),
        allowNull: false,
        unique: 'uniqueTag',
      },
      connector_available: {
        type: Sequelize.STRING(2048),
        allowNull: true,
      },
      weight: {
        type: Sequelize.FLOAT,
        allowNull: true,
      },
      length: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      width: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      height: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      os_included: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false
      },
      webcam: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: true
      },
      wifi: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: true
      },
      active: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: true
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Computers');
  }
};