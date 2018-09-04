'use strict';
module.exports = (sequelize, DataTypes) => {
  const product = sequelize.define('products', {
    minimumInvestment: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    percentageReturn: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  });
  return product;
};