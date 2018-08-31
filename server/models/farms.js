'use strict';
module.exports = (sequelize, DataTypes) => {
  const farms = sequelize.define('farms', {
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
    farmType: {
      type: DataTypes.INTEGER,
      allowNull: false,
    }
  });
  farms.associate = (models) => {
    farms.belongsTo(models.products, {
      foreignkey: 'id',
      onUPDATE: 'CASCADE',
      onDELETE: 'CASCADE'
    });
  };
  return farms;
};