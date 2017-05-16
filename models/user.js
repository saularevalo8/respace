'use strict';
module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define("User", {
  //   firstName: DataTypes.STRING,
  //   lastName: DataTypes.STRING,
  //   email: DataTypes.STRING,
  //   password: DataTypes.STRING
  // }
  firstName: {
      type: DataTypes.STRING
    },
    lastName: {
      type: DataTypes.STRING
    },
    email: {
      type: DataTypes.STRING
     },
     password: {
      type: DataTypes.STRING
     }
     
  // , {
  //   classMethods: {
  //     associate: function(models) {
  //       // associations can be defined here
  //       User.hasMany(models.Location)
  //       User.hasMany(models.Transaction);
  //     }
  //   }
  });
  return User;
};