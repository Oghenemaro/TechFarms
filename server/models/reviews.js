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
    userID: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    farmID: {
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
  return reviews;
};