const https = require('https');
const fs = require('fs');
const path = require('path');

const options = {
  hostname: 'en.wikipedia.org',
  port: 443,
  path: '/wiki/Nodejs',
  method: 'GET'
};

const req = https.request(options, (res) => {
  
  fs.writeFile(path.join(__dirname, '/', 'Nodejs.html'), '', err => {
	if(err) throw err;
	console.log('File created...');
  });
  
  res.on('data', (d) => {
    process.stdout.write(d);
	fs.appendFile(path.join(__dirname, '/', 'Nodejs.html'), d, err => {
		if(err) throw err;
	});
  });
  
  
});

req.on('error', (e) => {
  console.error(e);
});
req.end();