var mongoose = require("mongoose");
mongoose.connect(
  process.env.MONGOLAB_URI ||
  process.env.MONGOHQ_URL ||
  "mongodb://localhost/is-angieri"
);

module.exports.Work = require("./work.js");
