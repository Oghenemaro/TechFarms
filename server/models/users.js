'use strict';
module.exports = (sequelize, DataTypes) => {
  const users = sequelize.define('users', {
    username: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    password: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    firstname: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    lastname: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    email: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    cell: {
      type: DataTypes.TEXT,
      allowNull: false
    }, 
  });
  users.associate = (models) => {
    users.hasMany(models.farms, {
      foreignkey: 'id'
    });
  };
  users.associate = (models) => {
    users.hasMany(models.investments, {
      foreignkey: 'id'
    });
  };
  users.associate = (models) => {
    users.hasMany(models.reviews, {
      foreignkey: 'id'
    });
  };
  return users;
};