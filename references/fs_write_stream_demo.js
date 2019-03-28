const fs = require('fs');
const file = fs.createWriteStream('./Big_data.txt');

var a = Math.pow(10, 5);

for(let i=0; i<= a; i++) {
  file.write('Node.js is an ultimate backend javascript for backend development');
}

file.end();