var fs = require("fs");
var zlib = require('zlib');

fs.createReadStream('output.txt.gz')
   .pipe(zlib.createGunzip())
   .pipe(fs.createWriteStream('output_decompressed.txt'));
  
console.log("File Decompressed.");