const http = require('http');
const url = require('url');
const fs = require('fs');
const path = require('path');
const qs = require('querystring');

// Create file and write to file
fs.writeFile(path.join(__dirname, '/', 'hello.txt'), 'output.txt', err => {
	if(err) throw err;
	console.log('File created...');
});

// Create server
http.createServer((req, res) => {
	
	if(req.url === '/'){
		var reviewData = "";
		var pathname = url.parse(req.url).pathname;
		console.log("Request received for " + pathname);
		req.setEncoding("utf8");

		req.addListener("data",function(chunk){
			reviewData += chunk;
		});
		
		console.log(reviewData);
	} 
}).listen(8000, () => console.log('Server running...'));



fs.appendFile(path.join(__dirname, '/', 'output.txt'), `${name}: ${value}`, err => {
		if(err) throw err;
		console.log(`File updated with ${name}: ${value}...`);
	});