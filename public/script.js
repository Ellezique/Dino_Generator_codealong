//CLIENT SIDE
console.log('script.js loaded');

document.querySelector('#btnLoad').addEventListener('click', () => {
  getDinoName();
});

getDinoName(); //execute getDinoName function 

//create get request to get data from server. fetch using route created in index.js
async function getDinoName(){
  const response = await fetch('/dinoname');
  //promise to JSON
  const data = await response.json();
  //returns array of two strings for dino name. Convert to string of words seperated by space:
  let dinoName = data[0].join(" ");
  console.log(dinoName);
}