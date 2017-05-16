var index = require("../models/index.js");

module.exports = function(app) {

app.get("/api/all", function(req,res){
Model.findAll({}).then(function(results){
	res.json(results);
	})
})

app.get("/api/:book", function(req,res){
	if(req,params.book){
		Book.findAll({
			where: {
				carsize: req.params.book
			}
		}).then(function(results){
			res.json(results);
		});
	}
});

app.post("/app/new", function(req, res){
	supplier.create({
		name: req.boby.name,
		address: req.boby.address,
		city: req.boby.city,
		state: req.boby.state,
		zip: req.boby.zip,
		carsize: req.boby.carsize,
		duration: req.boby.duration
	});
});

app.post("/api/delete", function(req, res){
	supplier.destory({
		where: {
			id: req.body.id
			}
		});
	});
};

