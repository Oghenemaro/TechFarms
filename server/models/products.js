'use strict';
module.exports = (sequelize, DataTypes) => {
  const products = sequelize.define('products', {
    livestock: {
      type: Sequelize.TEXT,
      allowNull: false
    },
  });
  products.associate = (models) => {
    products.hasMany(models.farms, {
      foreignkey: 'id'
    });
  };
  products.associate = (models) => {
    products.hasMany(models.product-type, {
      foreignkey: 'id'
    });
  };
  return products;
};