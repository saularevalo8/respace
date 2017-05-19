'use strict';
var bcrypt = require("bcrypt-nodejs");

module.exports = function(sequelize, DataTypes) {
    var User = sequelize.define('User', {
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
        username: {
            type: DataTypes.STRING
        },
        password: {
            type: DataTypes.STRING
        }
    }, {
          classMethods: {
            associate: function(models) {
              // associations can be defined here
              User.hasMany(models.Location)
              User.hasMany(models.Transaction);
            }
          },
        instanceMethods: {
            validPassword: function(password) {
                return bcrypt.compareSync(password, this.password);
            }
        },
        // Hooks are automatic methods that run during various phases of the User Model lifecycle
        // In this case, before a User is created, we will automatically hash their password
        hooks: {
            beforeCreate: function(user, options, cb) {
                user.password = bcrypt.hashSync(user.password, bcrypt.genSaltSync(10), null);
                cb(null, options);
            }
        }

    });
    return User;
};
