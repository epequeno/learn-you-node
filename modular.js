var mymod = require('./lslib.js')

var dir =  process.argv[2];
var ext = process.argv[3];

mymod(dir, ext, function(err, files) {
  for (i = 0; i < files.length; i++) {
    console.log(files[i]);
  }
});
