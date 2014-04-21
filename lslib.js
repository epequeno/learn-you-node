/* Library for modular directory lister.
Intent: use fs.readdir to filter files in dir based on regexp of 
file extensions. export as module */

var fs = require('fs');

module.exports = function(dir, filter, callback) {
  var regex = new RegExp("\\." + filter + "$");
  fs.readdir(dir, function(err, list) {
    if (err) {
      return callback(err, null); 
    }
    else {
      results = [];
      for (i = 0; i < list.length; i++) {
        if (regex.test(list[i])) {
          results.push(list[i]);
        }
      }
    callback(null, results);
  }
});
};
