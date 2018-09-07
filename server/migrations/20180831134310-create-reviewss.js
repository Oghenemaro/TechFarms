'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('reviews', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      review: {
        type: Sequelize.TEXT,
        allowNull: false
      },
      liked: {
        type: Sequelize.TEXT,
        allowNull: false
      },
      disliked: {
        type: Sequelize.TEXT,
        allowNull: false
      },
      farmID: {
        type: Sequelize.INTEGER,
        allowNull: false,
        onUPDATE: 'CASCADE',
        onDELETE: 'CASCADE',
        reference: {
          model: 'farms',
          key: 'id'
        },
        userID: {
          type: Sequelize.INTEGER,
          allowNull: false,
          onUPDATE: 'CASCADE',
          onUPDATE: 'CASCADE',
          references: {
            model: 'users',
            key: 'id'
          }
        }
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
    return queryInterface.dropTable('reviews');
  }
};