//CLIENT SIDE
console.log('script.js loaded');

//Event listener for button click
document.querySelector('#btnLoad').addEventListener('click', () => {
  getDinoName(); //execute getDinoName function when button is clicked
  getDinoImage(); //execute getDinoImage function when button is clicked
});


//DINO NAME 
//create get request to get data from server. fetch using route created in index.js
async function getDinoName() {
  const response = await fetch('/dinoname');
  //promise to JSON
  const data = await response.json();
  //returns array of two strings for dino name. Convert to string of words seperated by space:
  let dinoName = data[0].join(" ");
  console.log(dinoName);
  document.querySelector('#dinoName').textContent = dinoName; //display result in browser under button
}


//DINO IMAGE
//create get request to get data from server. fetch using route created in index.js
async function getDinoImage() {
  const response = await fetch('/dinoimage');
  //promise to JSON
  const data = await response.json();
  //returns random image from array of images:
  let dinoImage = data.value[Math.floor(Math.random() * data.value.length)];
  let dinoImageURL = dinoImage.thumbnailUrl;
  // let dinoAlt = dinoImage.name;
  console.log(dinoImage);

  let img = document.createElement('img');
  img.src = dinoImageURL;
  // img.alt = dinoAlt;
  document.querySelector('body').appendChild(img);
}