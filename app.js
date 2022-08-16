'use strict'

//------------------------------ Array to hold all objects

let allProducts = []

//------------------------------ Constructor function and declared variables

function Product(name, imgUrl) {
    this.name = name;
    this.imgUrl = imgUrl;
    this.clicks = 0;
    this.views = 0;
    
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

// console.log(allProducts[15]);

//------------------------------ Variable: Counts total rounds. ++ each time an image is clicked

let currentRound = 0;

//------------------------------- Function: Generates random Image

function randomImage() {
    return Math.floor(Math.random() * allProducts.length);
}

//------------------------------ Function upon page load...show new image..
function onPageLoad() {
    let product1 = allProducts[randomImage()]; 
    let product2 = allProducts[randomImage()];  
    let product3 = allProducts[randomImage()];
    
    let image1 = document.getElementById('product-image1'); 
    image1.src = `img/${product1.imgUrl}`;
    
    let image2 = document.getElementById('product-image2');
    image2.src = `img/${product2.imgUrl}`;
    
    let image3 = document.getElementById('product-image3');
    image3.src = `img/${product3.imgUrl}`;
}
onPageLoad();

//------------------------------- Event Listener for each button

let button1 = document.getElementById('product-button1');
button1.addEventListener('click', showNewImage);

let button2 = document.getElementById('product-button2');
button2.addEventListener('click', showNewImage);

let button3 = document.getElementById('product-button3');
button3.addEventListener('click', showNewImage);



//------------------------------- Function: display new 3 images 

function showNewImage(event) {  //event is being clicked
    // console.log(event);
    
    // Selects random object (image) from array.
    let product1 = allProducts[randomImage()]; 
    let product2 = allProducts[randomImage()];  
    let product3 = allProducts[randomImage()];

    // let array = ;

    // while(product1 === product2 || product1 === product3 || product2 === product3){

    // }

    product1.views++;   // Increments views per object randomly selected.
    product2.views++;
    product3.views++;
    
    let image1 = document.getElementById('product-image1'); 
    image1.src = `img/${product1.imgUrl}`;
    image1.alt = product1.name;
    
    let image2 = document.getElementById('product-image2');
    image2.src = `img/${product2.imgUrl}`;
    image2.alt = product2.name;
    
    let image3 = document.getElementById('product-image3');
    image3.src = `img/${product3.imgUrl}`;
    image3.alt = product3.name;

    console.log(event);

    currentRound++;

        //-----------------------------------For loop: to get clicked total per object

    let altName = event.target.alt;
    for (let i = 0; i < allProducts.length; i++){
        if (allProducts[i].name == altName) {

            console.log(allProducts[i].name);

            allProducts[i].clicks++;
        }
    }

        if (currentRound === 5) {
        button1.removeEventListener('click', showNewImage);
        button2.removeEventListener('click', showNewImage);
        button3.removeEventListener('click', showNewImage);
    }
}

// showNewImage();

//------------------------------- Function:

//------------------------------- 

console.log(allProducts);







// //------------------------------- Function showNewImage

// function showNewImage(event) {
//     let altName = event.target.alt;
//     for (let i=0; i<allProducts.length; i++){
//         if (allProducts[i].name == altName) {
//             allProducts[i].clicked++;
//         }
//     }
//     console.log(event.target);
//     let product1 = allProducts[randomImage()];     // Gets random product from array.
//     let product2 = allProducts[randomImage()];     
//     let product3 = allProducts[randomImage()];     
//     product1.views++;   //increments object views.
//     product2.views++;
//     product3.views++;
    
//     let image1 = document.getElementById('product-image1');     // Selects the image.
//     image1.src = `img/${product1.imgUrl}`;      // Makes image the product.
//     image1.alt = product1.name;

//     let image2 = document.getElementById('product-image2');     // Selects the image.
//     image2.src = `img/${product2.imgUrl}`;      // Makes image the product.
//     image2.alt = product2.name;

//     let image3 = document.getElementById('product-image3');     // Selects the image.
//     image3.src = `img/${product3.imgUrl}`;      // Makes image the product.
//     image3.alt = product3.name;    
    
//     currentRound++;
        
//         if (currentRound === 5) {
//         button.removeEventListener('click', showNewImage);
        
//     }
//         console.log(allProducts);
// }

// // //------------------------------- Call function showNewImage
// // showNewImage();












// //------------------------------- Function showResults

// // let results = document.getElementById('results-button');
// // results.addEventListener('click', displayResults);

// // function displayResults() {
// //     for(let i = 0; i < allProducts.length; i++) {
// //         let product = allProducts[i];
// //         // let 
// //         product.innerHtml = `'${product.name}' was clicked ${product.clicked} times, and was shown ${product.shown} times.`

// //     }
// // }

