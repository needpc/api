'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('computers', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      osid: {
        type: Sequelize.INTEGER,
        references: { model: 'computers_os', key: 'id' },
        allowNull: true,
        defaultValue: 1
      },
      keyboardid: {
        type: Sequelize.INTEGER,
        references: { model: 'computers_keyboards', key: 'id' },
        allowNull: true,
        defaultValue: 1
      },
      cpuid: {
        type: Sequelize.INTEGER,
        references: { model: 'computers_cpus', key: 'id' },
        allowNull: true,
        defaultValue: 1
      },
      screenId: {
        type: Sequelize.INTEGER,
        references: { model: 'computers_screens', key: 'id' },
        allowNull: true,
        defaultValue: 1
      },
      gpuid: {
        type: Sequelize.INTEGER,
        references: { model: 'computers_gpus', key: 'id' },
        allowNull: true,
        defaultValue: 1
      },
      activityid: {
        type: Sequelize.INTEGER,
        references: { model: 'computers_activities', key: 'id' },
        allowNull: true,
        defaultValue: 1
      },
      chipsetid: {
        type: Sequelize.INTEGER,
        references: { model: 'computers_chipsets', key: 'id' },
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
        type: Sequelize.STRING(16),
        allowNull: true,
      },
      length: {
        type: Sequelize.STRING(16),
        allowNull: true,
      },
      width: {
        type: Sequelize.STRING(16),
        allowNull: true,
      },
      height: {
        type: Sequelize.STRING(16),
        allowNull: true,
      },
      memory_size: {
        type: Sequelize.STRING(128),
        allowNull: true,
      },
      memory_type: {
        type: Sequelize.STRING(128),
        allowNull: true,
      },
      memory_max_size: {
        type: Sequelize.STRING(128),
        allowNull: true,
      },
      storage_size: {
        type: Sequelize.STRING(128),
        allowNull: true,
      },
      storage_type: {
        type: Sequelize.STRING(128),
        allowNull: true,
      },
      network: {
        type: Sequelize.STRING(128),
        allowNull: true,
      },
      webcam: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: true
      },
      active: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: true
      },
      createdat: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedat: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('computers');
  }
};