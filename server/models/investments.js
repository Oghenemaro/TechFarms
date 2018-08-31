'use strict';
module.exports = (sequelize, DataTypes) => {
  const investments = sequelize.define('investments', {
    users: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    farms: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    amountPaid: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    ROI: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    totalEarnings: {
      type: DataTypes.TEXT,
      allowNull: false
    },
  });
  investments.associate = (models) => {
    investments.belongsTo(models.users, {
      foreign: 'id',
      onUPDATE: 'CASCADE',
      onDELETE: 'CASCADE'
    });
  };
  investments.associate = (models) => {
    investments.belongsTo(models.farms, {
      foreignkey: 'id',
      onUPDATE: 'CASCADE',
      onDELETE: 'CASCADE'
    });
  }
  return investments;
};