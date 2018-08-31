'use strict';
module.exports = (sequelize, DataTypes) => {
  const productType = sequelize.define('product-type', {
    types: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    quantity: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    product: {
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