'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('investments', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      user: {
        type: Sequelize.INTEGER,
        allowNull: false,
        onUPDATE: 'CASCADE',
        onDELETE: 'CASCADE',
        references: {
          model: 'users',
          key: 'id'
        }
      },
      farm: {
        type: Sequelize.INTEGER,
        allowNull: false,
        onUPDATE: 'CASCADE',
        onDELETE: 'CASCADE',
        references: {
          model: 'farms',
          key: 'id'
        }
      },
      amountPaid: {
        type: Sequelize.TEXT,
        allowNull: false
      },
      ROI: {
        type: Sequelize.TEXT,
        allowNull: false
      },
      totalEarnings: {
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
    return queryInterface.dropTable('investments');
  }
};