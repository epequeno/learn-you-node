var fs = require('fs')

var re = new RegExp("\\." + process.argv[3] + "$");

fs.readdir(process.argv[2], function (err, list) {
  if (err) throw err;
  for (i=0; i<=list.length; i++) {
    if (list[i].match(re)) {
      console.log(list[i]);
    }
  }
});


