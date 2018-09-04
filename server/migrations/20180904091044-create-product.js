'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return [
      queryInterface.addColumn('products', 'minimumInvestment', {
        type: Sequelize.TEXT,
        // allowNull: false
      }),
      queryInterface.addColumn('products', 'percentageReturns', {
        type: Sequelize.TEXT,
        // allowNull: false
      })
    ];
 },
  down: (queryInterface, Sequelize) => {
    return [
      queryInterface.removeColumn('products', 'minimumInvestment'),
      queryInterface.removeColumn('products', 'percentageReturns')
    ];
  }
};