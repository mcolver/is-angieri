var db = require("./models");

var workList =[
  {
    projectName: 'Nine Inch Nails',
    name: 'The Downward Spiral',
    releaseDate: '1994, March 8',
    tags: [ 'industrial', 'industrial metal' ]
  },
  {
    projectName: 'Metallica',
    name: 'Metallica',
    releaseDate: '1991, August 12',
    tags: [ 'heavy metal' ]
  },
  {
    projectName: 'The Prodigy',
    name: 'Music for the Jilted Generation',
    releaseDate: '1994, July 4',
    tags: [ 'electronica', 'breakbeat hardcore', 'rave', 'jungle' ]
  },
  {
    projectName: 'Johnny Cash',
    name: 'Unchained',
    releaseDate: '1996, November 5',
    tags: [ 'country', 'rock' ]
  }
];

db.Work.remove({}, function (err, work) {

  db.Work.create(workList, function(err, work){
    if (err) { return console.log('ERROR', err); }
    console.log("all work:", work);
    console.log("created", work.length, "work");
    process.exit();
  });

});