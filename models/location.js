'use strict';
module.exports = function(sequelize, DataTypes) {
  var Location = sequelize.define('Location', {
    name: DataTypes.STRING,
    address: DataTypes.STRING,
    city: DataTypes.STRING,
    state: DataTypes.STRING,
    zip: DataTypes.INTEGER,
    carSize: DataTypes.STRING,
    inUse: DataTypes.BOOLEAN,
    startTime: DataTypes.STRING,
    endTime: DataTypes.STRING,
    isPaid: DataTypes.BOOLEAN
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        Location.belongsTo(models.User, {as: 'owner'})
        Location.hasMany(models.Transaction);

      }
    }
  });
  return Location;
};

//Location.sync();