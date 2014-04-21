var fs = require('fs')

var contentsBuff = fs.readFileSync(process.argv[2]);

var contentsStr = contentsBuff.toString();

var splitlines = contentsStr.split('\n')

console.log(splitlines.length)
