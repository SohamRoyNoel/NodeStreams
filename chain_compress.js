/**
 * Chaining is a mechanism to connect the output of one stream to another stream and create a 
 * chain of multiple stream operations. It is normally used with piping operations.
 */
var fs = require("fs");
var zlib = require('zlib');

// Compress the file input.txt to input.txt.gz
fs.createReadStream('output.txt')
   .pipe(zlib.createGzip())
   .pipe(fs.createWriteStream('output.txt.gz'));
  
console.log("File Compressed.");