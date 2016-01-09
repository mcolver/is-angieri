var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/professional_portfolio");

module.exports.Work = require("./work.js");