// SERVER-SIDE JAVASCRIPT
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var express = require('express');
var app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/node_modules'));

/*
 * HTML Endpoints
 */
app.get('/', function (req, res) {
  res.sendFile('views/index.html' , { root : __dirname});
});

app.get('/#about', function (req, res) {
    res.sendFile('views/index.html' , { root : __dirname});
});

app.get('/#contacts', function (req, res) {
  res.sendFile('views/index.html' , { root : __dirname});
});

app.get('/#applications', function (req, res) {
  res.sendFile('views/index.html' , { root : __dirname});
});

app.get('/#ride-to-end-aids', function (req, res) {
  res.sendFile('views/index.html' , { root : __dirname});
});


/************
 * DATABASE *
 ************/

var db = require("./models/index.js");

/**********
 * ROUTES *
 **********/

/*
 * JSON API Endpoints
 */


/**********
 * SERVER *
 **********/

// listen on port 3000
app.listen(process.env.PORT || 3000, function () {
  console.log('Express server is running on http://localhost:3000/');
});
