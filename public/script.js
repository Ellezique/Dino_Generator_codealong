//CLIENT SIDE
console.log('script.js loaded');

getDinoName(); //execute getDinoName function 

//create get request to get data from server. fetch using route created in index.js
async function getDinoName(){
  const response = await fetch('/dinoname');
  //promise to JSON
  const data = await response.json();
  console.log(data);
}