// SERVER-SIDE JAVASCRIPT
var mongoose = require('mongoose');
//require express in our app
var express = require('express');
// generate a new express app and call it 'app'
var app = express();

// configure bodyParser (for receiving form data)
var bodyParser = require("body-parser");
// parse POSTed data
app.use(bodyParser.urlencoded({extended: true}));

// serve static files from public folder
app.use(express.static(__dirname + '/public'));

app.use(express.static(__dirname + '/node_modules'));

/*
 * HTML Endpoints
 */
//for client req to server, res 'Hello World'
app.get('/', function (req, res) {
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

//mongoose connect
mongoose.connect(
  process.env.MONGOLAB_URI ||
  process.env.MONGOHQ_URL ||
  'mongodb://localhost/is-angieri'
);