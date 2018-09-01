'use strict';
module.exports = (sequelize, DataTypes) => {
  const products = sequelize.define('products', {
    livestock: {
      type: DataTypes.TEXT,
      allowNull: false
    },
  });
  products.associate = (models) => {
    products.hasMany(models.farms, {
      foreignkey: 'id'
    });
  };
  products.associate = (models) => {
    products.hasMany(models.productType, {
      foreignkey: 'id'
    });
  };
  return products;
};