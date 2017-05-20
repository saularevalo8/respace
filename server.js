var express = require("express");
var passport = require('passport')
var bodyParser = require("body-parser");
var session = require("express-session");
var passportConfig = require("./config/passport");
// Setting up port and requiring models for syncing
var PORT = process.env.PORT || 8080;
var db = require("./models");
var app = express();

app.use('public', express.static(__dirname+'/public'));

app.set('views', __dirname +'/views');

app.set('port', process.env.PORT || 8080);

app.use(session({ secret: "keyboard cat", resave: true, saveUninitialized: true }));
// Creating express app and configuring middleware needed for authentication

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd+json" }));

app.use(express.static("public"));
// We need to use sessions to keep track of our user's login status
// app.use(session({ secret: "keyboard cat", resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());


// Requiring our routes

require("./routes/html-routes.js")(app);
require("./routes/api-routes.js")(app);


// Syncing our database and logging a message to the user upon success
db.sequelize.sync({ force: true }).then(function() {
    app.listen(PORT, function() {
        console.log("==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.", PORT, PORT);
    });
});
