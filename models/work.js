var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var WorkSchema = new Schema({
  projectName: String,
  name: String,
  releaseDate: String,
  tags: [ String ]
});

var Work = mongoose.model('Work', WorkSchema);

module.exports = Work;