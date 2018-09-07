'use strict';
module.exports = (sequelize, DataTypes) => {
  const products = sequelize.define('products', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    livestock: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    minimumInvestment: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    percentageReturn: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    duration: {
      type: DataTypes.TEXT,
      allowNull: false
    }
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