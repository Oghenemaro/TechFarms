'use strict';
module.exports = (sequelize, DataTypes) => {
  const reviewss = sequelize.define('reviewss', {
    firstname: DataTypes.TEXT
  }, {});
  reviewss.associate = function(models) {
    // associations can be defined here
  };
  return reviewss;
};