const request = require('request');
const fs = require('fs');

const args = process.argv.slice(2);

let url = args[0];
let filePath = args[1];


request(url, (error, response, body) => {  
  fs.writeFile(filePath, body, err => {
    if (err) {
      console.error(err);
    }

    fs.stat(filePath, (err, stats) => {
      if (err) {
        console.log(err);
      }

      console.log(`Downloaded and saved ${stats.size} bytes to ${filePath}.`);
    });  
  });
});
