const fs = require('fs');
const path = require('path');

// Create folder
fs.mkdir(path.join(__dirname, '/test'), {}, err => {
	if(err) throw err;
	console.log('Folder created...')
});

// Create file and write to file
fs.writeFile(path.join(__dirname, '/test', 'hello.txt'), 'Hello world!!!', err => {
	if(err) throw err;
	console.log('File created...');
	
	fs.appendFile(path.join(__dirname, '/test', 'hello.txt'), ' I love Node.js!!!', err => {
		if(err) throw err;
		console.log('File created...');
	});
});

// Read File
fs.readFile(path.join(__dirname, '/test', 'hello.txt'), 'utf8', (err, data) => {
	if(err) throw err;
	console.log(data);
});

// Rename File
fs.readFile(path.join(__dirname, '/test', 'hello.txt'), path.join(__dirname, '/test', 'hello_world.txt'), (err, data) => {
	if(err) throw err;
	console.log('File renamed');
});