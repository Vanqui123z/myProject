var express = require('express');
var morgan = require("morgan");


var app = express();
app.use(morgan("succeed"));

app.get('/', function (req, res) {
   res.send('Hello World a');
})

var server = app.listen(5000, function () {
   console.log("Express App running at locallhost:5000/");
})