var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/is-angieri");

module.exports.Work = require("./work.js");