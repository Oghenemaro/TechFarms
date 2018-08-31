'use strict';
module.exports = (sequelize, DataTypes) => {
  const reviews = sequelize.define('reviews', {
    review: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    liked: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    disliked: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    users: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    farms: {
      type: DataTypes.TEXT,
      allowNull: false
    },
  });
  reviews.associate = (models) => {
    reviews.belongsTo(models.users, {
      foreignkey: 'id',
      onUPDATE: 'CASCADE',
      onDELETE: 'CASCADE'
    });
  };
  reviews.associate = (models) => {
    reviews.belongsTo(models.farms, {
      foreignkey: 'id',
      onUPDATE: 'CASCADE',
      onDELETE: 'CASCADE'
    });
  };
  return reviewss;
};