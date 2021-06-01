/**
 * Piping is a mechanism where we provide the output of one stream as the input to another stream. It is normally used to get data 
 * from one stream and to pass the output of that stream to another stream.
 */
var fs = require("fs");

// Create a readable stream
var readerStream = fs.createReadStream('output.txt');

// Create a writable stream
var writerStream = fs.createWriteStream('output1.txt');

// Pipe the read and write operations
// read input.txt and write data to output.txt
readerStream.pipe(writerStream);

console.log("Program Ended");