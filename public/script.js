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
  let dinoAlt = dinoImage.name;
  console.log(dinoImage);


  //check if image exists, by id, before creating an image.
  if (document.querySelector('#dinoImage') !== null){
    //if an image exists, remove that image
    document.querySelector('#dinoImage').remove();
  }
  //Now that we have no image, we can create a new image element
  let img = document.createElement('img');
  img.id = 'dinoImage';
  img.src = dinoImageURL;
  img.alt = dinoAlt;
  //append that newly created image element in the body of the html document
  document.querySelector('body').appendChild(img);
}