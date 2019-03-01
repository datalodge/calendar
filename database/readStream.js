const fs = require('fs')
var stream = fs.createReadStream("data.csv")
const csv = require('fast-csv')

var csvStream = csv
  .parse()
  .on("data", function(data){
    console.log(data[2]);
  })
  .on("end", function(){
      console.log("done")
  });
stream.pipe(csvStream)