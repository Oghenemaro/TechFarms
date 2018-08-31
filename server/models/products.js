'use strict';
module.exports = (sequelize, DataTypes) => {
  const products = sequelize.define('products', {
    firstname: DataTypes.TEXT
  }, {});
  products.associate = function(models) {
    // associations can be defined here
  };
  return products;
};