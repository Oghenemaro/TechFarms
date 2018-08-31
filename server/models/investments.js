'use strict';
module.exports = (sequelize, DataTypes) => {
  const investments = sequelize.define('investments', {
    firstname: DataTypes.TEXT
  }, {});
  investments.associate = function(models) {
    // associations can be defined here
  };
  return investments;
};