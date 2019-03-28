const fs = require('fs');
const path = require('path');

var readable = fs.createReadStream(path.join(__dirname, '/Node-stream-handson', 'data_file.txt'), { encoding: 'utf8', highWaterMark: 1024 });

var data = '';
var donwloaded = 0;

readable.on('data', function(chunk) {  
    data += chunk;
    donwloaded += chunk.length;
    console.log('Chunk size', chunk.length);
    console.log('Donwloaded', donwloaded);
	console.log('Chunk', chunk);
});

readable.on('end', function() {
    console.log('Total ', donwloaded);
});
