'use strict';
module.exports = function(sequelize, DataTypes) {
  var Transaction = sequelize.define('Transaction', {
    startTime: DataTypes.DATE,
    endTime: DataTypes.DATE,
    isPaid: DataTypes.BOOLEAN
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        Transaction.belongsTo(models.User);
        Transaction.belongsTo(models.Location);
      }
    }
  });
  return Transaction;
};