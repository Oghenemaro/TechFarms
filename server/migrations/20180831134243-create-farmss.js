'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('farms', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      farmname: {
        type: Sequelize.TEXT,
        allowNull: false
      },
      address: {
        type: Sequelize.TEXT,
        allowNull: false
      },
      productID: {
        type: Sequelize.INTEGER,
        allowNull: false,
        onUPDATE: 'CASCADE',
        onDELETE: 'CASCADE',
        references: {
          model: 'products',
          key: 'id'
        }
      },
      size: {
        type: Sequelize.TEXT,
        allowNull: false
      },
      insuranceStatus: {
        type: Sequelize.TEXT,
        allowNull: false
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
    return queryInterface.dropTable('farms');
  }
};