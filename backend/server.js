var mongoose = require("mongoose");
mongoose.connect("mongodb://dbuser:dbpass1@ds035787.mlab.com:35787/hackgt2018");

var express = require("express");
var app = express();
var port = 3000;
var bodyParser = require("body-parser")

var jsonParser = bodyParser.json();
app.use(bodyParser.json());


//add routes
var services = require("./services");
app.use("/api/services",services);

var users = require("./users");
app.use("/api/users", users)

app.listen(port, () => console.log("Listening on port " + port));



