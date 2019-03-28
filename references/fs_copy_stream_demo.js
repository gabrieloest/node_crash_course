var fs = require('fs');
const path = require('path');

fs.createReadStream(path.join(__dirname, '/Node-stream-handson', 'data_file.txt'), 'utf8').pipe(fs.createWriteStream(path.join(__dirname, '/', 'new_data_file.txt'), 'utf8'));

// destination.txt will be created or overwritten by default.
fs.copyFile(path.join(__dirname, '/Node-stream-handson', 'data_file.txt'), path.join(__dirname, '/', 'new_data_file.txt'), (err) => {
    if (err) throw err;
    console.log('data_file.txt was copied to new_data_file.txt');
});


/*
    Create readable stream to file in current directory named 'node.txt'
    Use utf8 encoding 
    Read the data in 16-kilobyte chunks
*/
var readable = fs.createReadStream(path.join(__dirname, '/Node-stream-handson', 'data_file.txt'), { encoding: 'utf8', highWaterMark: 16 * 1024 });

// create writable stream
var writable = fs.createWriteStream(path.join(__dirname, '/', 'new_data_file.txt'));

// use pipe to copy readable to writable
readable.pipe(writable);