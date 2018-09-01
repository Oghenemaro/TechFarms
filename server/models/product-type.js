'use strict';
module.exports = (sequelize, DataTypes) => {
  const productType = sequelize.define('productType', {
    types: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    quantity: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    products: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
  });
  productType.associate = (models) => {
    productType.belongsTo(models.products, {
      foreignkey: 'id',
      onUPDATE: 'CASCADE',
      onDELETE: 'CASCADE'
    });
  };
  return productType;
};