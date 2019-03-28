const http = require('http');
const qs = require('querystring');
const fs = require('fs');
const path = require('path');
const url = require('url');

http.createServer((request, response) => {
    console.log('Starting the server...');
	
    if(request.method === 'POST' && request.url === '/') {
        console.log('Processing POST on /...');
        
        // very important to handle errors
        request.on('error', (err) => {
            if(err) {
                console.log('');
                response.writeHead(500, {'Content-Type': 'text/html'});
                response.write('An error occurred');
                response.end();
            }
        });
		
		let body = '';
		request.on('data', chunk => {
			body += chunk.toString(); // convert Buffer to string
		});
		request.on('end', () => {
			body = qs.parse(body);
			console.log(body);
			// rest of the code
            fs.writeFile(path.join(__dirname, '/', 'output.txt'), JSON.stringify(body), err => {
				if(err) throw err;
				console.log('File created...');
			});
			response.end('ok');
		});
    }
	
	if(request.url === '/'){
		fs.readFile(path.join(__dirname, '/', 'index.html'), (err, content) => {
			if (err) throw err;
			response.writeHead(200, {'Content-type': 'text/html'});
			response.end(content);
		});
	}
}).listen(8000, () => console.log('Server running...'));