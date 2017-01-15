var express = require("express");
var app = express();
var bodyParser = require('body-parser');
var path = require("path");

var port = process.env.PORT || 2222;
app.listen(port);
console.log("Running on ",port);

app.engine('.html', require('ejs').__express);

app.set('view engine', 'html');

/* COMMON RESOURCES */
app.use(bodyParser.json());
app.use("/bower_components",express.static("bower_components")); // Shared libraries
app.use("/resources",express.static("resources")); // Shared resources


var signup = require("./api/signup.js");
app.use("/api",signup);

app.use("/",express.static("home")); // WebApp Frame
app.get(['/','/*','/**'],function(req,res){
	res.sendFile(path.join(__dirname, '/home/index.html'));
})