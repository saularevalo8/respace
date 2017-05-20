// *********************************************************************************
// html-routes.js - this file offers a set of routes for sending users to the various html pages
// *********************************************************************************

// Dependencies
// =============================================================
var path = require("path");
var isAuthenticated = require("../config/middleware/isAuthenticated");
// Routes
// =============================================================
module.exports = function(app) {

    // Each of the below routes just handles the HTML page that the user gets sent to.

    // index route loads view.html
    app.get("/", function(req, res) {
        if (req.user) {
             res.redirect("/profile");
         }

        res.sendFile(path.join(__dirname, "../public/index.html"));
    });

    // profile route loads profile.html
    app.get("/profile", isAuthenticated, function(req, res) {
            res.sendFile(path.join(__dirname, "../public/profile.html"));
        });

    // map route loads map.html
    app.get("/map", isAuthenticated, function(req, res) {
        res.sendFile(path.join(__dirname, "../public/map.html"));
    });

};
