// var Sequelize = require("sequelize");

<<<<<<< HEAD
// var sequelize = new Sequelize("respace_db", "root", "password" {
// 	host: "localhost",
// 	dialect: "mysql",
// 	pool: {
// 		max: 5,
// 		min: 0,
// 		idle: 10000
// 	}
// });

// module.exports = sequelize;
=======

var sequelize = new Sequelize("respace_db", "root", "", {
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
>>>>>>> a2ab2311b51c2427abb14e4f8955fba05d3c273a
