var express = require('express');
var app = express();
app.use(express.static('server/public'));

var bodyParser = require('body-parser');
app.use(bodyParser.json());
// NOTE: or
app.use(bodyParser.urlencoded({extended: true}));

var path = require('path'); // NOTE: If required

// var someNameRouter = require('./routes/somePath');

// NOTE: app.use lines are considered middleware

// app.use('/somePath', someNameRouter);

app.listen(5000, function() {
  console.log("app.js loaded & server listening to port 5000");
});
