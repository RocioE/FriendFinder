// Dependencies
var express = require("express");
var app = express();

var PORT = process.env.PORT || 8080;

// For serving of static CSS
app.use(express.static(__dirname + "")); //HELP///
app.use(express.json());

// API and HTML routes
require("./app/routing/apiRoutes.js")(app);  //IS PATH CORRECT?//
require("./app/routing/htmlRoutes.js")(app);

app.listen(PORT, function() {
	console.log("App listening on PORT: " + PORT);
});