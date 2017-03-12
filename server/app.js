var express = require('express');
var bodyParser = require('body-parser');
var app = express();
// var path = require('path'); // NOTE: If required
var defaultRouter = require('./routes/routes');
//
// // NOTE: app.use code is considered middleware
app.use(express.static('server/public')); // NOTE: THIS IS NOT THE PATH! 'public'
app.use(bodyParser.json());
// // NOTE: or
app.use(bodyParser.urlencoded({extended: true}));
app.use('/routes', defaultRouter);

app.listen(5000, function() {
  console.log("app.js loaded & server listening to port 5000");
});
