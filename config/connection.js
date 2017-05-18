var Sequelize = require("sequelize");


var sequelize = new Sequelize("respace_db", "root", "F0ll0wthewhiterabbit", {
	host: "localhost",
	dialect: "mysql",
	pool: {
		max: 5,
		min: 0,
		idle: 10000
	}
});

// var sequelize = new Sequelize("respace_db", "root", "" {
// 	host: "localhost",
// 	dialect: "mysql",
// 	pool: {
// 		max: 5,
// 		min: 0,
// 		idle: 10000
// 	}
// });

module.exports = sequelize;
