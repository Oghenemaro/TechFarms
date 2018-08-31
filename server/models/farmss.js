'use strict';
module.exports = (sequelize, DataTypes) => {
  const farmss = sequelize.define('farmss', {
    firstname: DataTypes.TEXT
  }, {});
  farmss.associate = function(models) {
    // associations can be defined here
  };
  return farmss;
};