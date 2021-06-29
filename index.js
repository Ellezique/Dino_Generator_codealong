//https://expressjs.com/en/starter/hello-world.html
//imports express module
const express = require('express'); 
//create express app
const app = express(); 
//set port
const port = 3000;

//https://expressjs.com/en/starter/static-files.html
app.use(express.static('public')); //to serve images, CSS files, and JavaScript files in a directory named public

//Server to listen for any requests made at port 3000. 
//If a browser makes a request to load this local website using port 3000, then it will serve the website
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  })