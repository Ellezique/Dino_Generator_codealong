//CLIENT SIDE
console.log('script.js loaded');

//Event listener for button click
document.querySelector('#btnLoad').addEventListener('click', () => {
  getDinoName();
  getDinoImage;
});

getDinoName(); //execute getDinoName function 

//DINO NAME 
//create get request to get data from server. fetch using route created in index.js
async function getDinoName(){
  const response = await fetch('/dinoname');
  //promise to JSON
  const data = await response.json();
  //returns array of two strings for dino name. Convert to string of words seperated by space:
  let dinoName = data[0].join(" ");
  console.log(dinoName);
}


//DINO IMAGE
//create get request to get data from server. fetch using route created in index.js
async function getDinoImage(){
  const response = await fetch('/dinoimage');
  //promise to JSON
  const data = await response.json();
  //returns array of two strings for dino name. Convert to string of words seperated by space:
  let dinoImage = data[0];
  console.log(dinoImage);
}