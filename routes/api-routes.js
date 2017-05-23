
// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================

// Requiring our Todo model
var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {

  app.post("/api/users", function(req, res) {
    console.log(req.body);
    db.User.create({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      password: req.body.password
    })
    .then(function(dbUser) {
      res.json(dbUser);
    });
  });

  app.post("/api/locations", function(req, res) {
    console.log(req.body);
    db.Location.create({
      address: req.body.address,
      city: req.body.city,
      state: req.body.state,
      zip: req.body.zip,
      carSize: req.body.carSize,
      startTime: req.body.startTime,
      endTime: req.body.endTime
    })
    .then(function(dbLocation) {
      res.json(dbLocation);

    });
  });


};



