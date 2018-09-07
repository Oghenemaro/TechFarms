'use strict';
module.exports = (sequelize, DataTypes) => {
  const farms = sequelize.define('farms', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    farmname: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    address: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    size: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    insuranceStatus: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    productID: {
      type: DataTypes.INTEGER,
      allowNull: false,
    }
  });
  farms.associate = (models) => {
    farms.belongsTo(models.products, {
      foreignKey: 'productID',
      onUPDATE: 'CASCADE',
      onDELETE: 'CASCADE'
    });
  };
  return farms;
};