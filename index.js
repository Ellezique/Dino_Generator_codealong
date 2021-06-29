//https://expressjs.com/en/starter/hello-world.html
//imports express module
const express = require('express'); 
//create express app
const app = express(); 
//set port
const port = 3000;
//Use fetch function in node
const fetch = require('node-fetch');

//https://expressjs.com/en/starter/static-files.html
app.use(express.static('public')); //to serve images, CSS files, and JavaScript files in a directory named public

//Server to listen for any requests made at port 3000. 
//If a browser makes a request to load this local website using port 3000, then it will serve the website
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  });

//DINOSAUR NAME API 
//Create express route. Client makes http request to server to get information
app.get('/dinoname', async(request, response) => {
    //feth returns a javascript promise
    const fetchApi = await fetch("https://alexnormand-dino-ipsum.p.rapidapi.com/?paragraphs=1&words=2&format=json", {
        "method": "GET",
        "headers": {
            "x-rapidapi-key": "340443d564mshafed55be5f3d246p1b6e81jsna1a305994ed9",
            "x-rapidapi-host": "alexnormand-dino-ipsum.p.rapidapi.com"
        }
    });
    //promise to JSON format                            
    const dinoNameResponse = await fetchApi.json();
    console.log(dinoNameResponse);
    //set response
    response.json(dinoNameResponse);
});             

//DINOSAUR IMAGE 
//Create express route. Client makes http request to server to get information
app.get('/dinoimage', async(request, response) => {
    //feth returns a javascript promise
    const fetchApi = await fetch("https://bing-image-search1.p.rapidapi.com/images/search?q=dinosaur&count=1", {
        "method": "GET",
        "headers": {
            "x-rapidapi-key": "340443d564mshafed55be5f3d246p1b6e81jsna1a305994ed9",
            "x-rapidapi-host": "bing-image-search1.p.rapidapi.com"
        }
    });
    //promise to JSON format                            
    const dinoImageResponse = await fetchApi.json();
    console.log(dinoImageResponse);
    //set response
    response.json(dinoImageResponse);
});             