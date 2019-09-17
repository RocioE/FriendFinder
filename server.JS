// Dependencies
var express = require('express');
var app = express();
var app = express();
var port = process.env.PORT || 8080;  //could use 3000, 5000, these are open ports



// For serving of static CSS
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// API and HTML routes
require("./app/routing/apiRoutes.js")(app);  
require("./app/routing/htmlRoutes.js")(app);

app.listen(port, function() {
	console.log("App listening on port: " + port);
});

