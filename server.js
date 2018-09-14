var express = require("express");
var bodyParser = require("body-parser");
var app = express();
var htmlroutes = require("./app/routing/htmlRoutes.js")
var apiroutes = require("./app/routing/apiRoutes.js")
var port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(htmlroutes);
app.use(apiroutes);
app.use(express.static("./app/public"))

app.listen(port)