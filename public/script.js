//CLIENT SIDE
console.log('script.js loaded');

//Event listener for button click
document.querySelector('#btnLoad').addEventListener('click', () => {
  //check if name exists, by id, before creating an image.
  if (document.querySelector('#dinoName') !== null){
    //if an name exists, remove that dino name
    document.querySelector('#dinoName').remove();
  }
   //check if image exists, by id, before creating an image.
   if (document.querySelector('#dinoImage') !== null){
    //if an image exists, remove that image
    document.querySelector('#dinoImage').remove();
  }
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

  //Logic required for dino name label on image to display
  
  let dinoNameDiv = document.createElement('div');
  dinoNameDiv.id = 'dinoName';
  dinoNameDiv.textContent = dinoName; //display result in browser under button
  //append that newly created name in html section class="generator"
  document.querySelector('#dinoWrapper').appendChild(dinoNameDiv);
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

 
  //Now that we have no image, we can create a new image element
  let img = document.createElement('img');
  img.id = 'dinoImage';
  img.src = dinoImageURL;
  img.alt = dinoAlt;
  //append that newly created image element in html section class="generator"
  document.querySelector('#dinoWrapper').appendChild(img);
}