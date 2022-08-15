'use strict'

let allProducts = []

//------------------------------ Constructor function

function Product(name, imgUrl) {
    this.name = name;
    this.imgUrl = imgUrl;
    this.clicked = 0;
    this.shown = 0;
    
    allProducts.push(this);
}
let bag = new Product('bag', 'bag.jpg');
let banana = new Product('banana', 'banana.jpg');
let bathroom = new Product('bathroom', 'bathroom.jpg');
let boots = new Product('boots', 'boots.jpg');
let breakfast = new Product('breakfast', 'breakfast.jpg');
let bubblegum = new Product('bubblegum', 'bubblegum.jpg');
let chair = new Product('chair', 'chair.jpg');
let cthulhu = new Product('cthulhu', 'cthulhu.jpg');
let dogDuck = new Product('dog-duck', 'dog-duck.jpg');
let dragon = new Product('dragon', 'dragon.jpg');
let pen = new Product('pen', 'pen.jpg');
let petSweep = new Product('pet-sweep', 'pet-sweep.jpg');
let scissors = new Product('scissors', 'scissors.jpg');
let shark = new Product('shark', 'shark.jpg');
let sweep = new Product('sweep', 'sweep.png');  // only .png image
let tauntaun = new Product('tauntaun', 'tauntaun.jpg');
let unicorn = new Product('unicorn', 'unicorn.jpg');
let waterCan = new Product('water-can', 'water-can.jpg');
let wineGlass = new Product('wine-glass', 'wine-glass.jpg');

//------------------------------ 


let currentRound = 0;

//------------------------------- Random Image function

function randomImage() {
    return Math.floor(Math.random() * allProducts.length);
}

//------------------------------- DOM Manipulation

// let product = allProducts[randomImage()]; // uses function inside of images array.
// let img = document.getElementById('productImage');
// img.src = `img/${product.imgUrl}`

//------------------------------- Event Listener

let button = document.getElementById('productButton');
button.addEventListener('click', showNewImage);

//------------------------------- Function showNewImage

function showNewImage() {

    let product = allProducts[randomImage()];   // Gets random product.

    let img = document.getElementById('productImage');   // Selects the image.
    img.src = `img/${product.imgUrl}`;   // Makes image the product.

    product.clicked++;
    console.log(product);
    currentRound++;

    if (currentRound === 25) {
        button.remove.addEventListener('click', showNewImage);
    }

}

//-------------------------------

showNewImage();

console.log(bag.imgUrl);

//-------------------------------