'use strict'

//------------------------------ Array to hold objects

let imageArray = [];    // 

//------------------------------ Some global variables

let imageElements = document.querySelectorAll('img'); //grabs img HTML tags. Use forEach below.

//------------------------------ Variable to count rounds

let rounds = 0;

//------------------------------ Constructor function images. Has two parameters.

function Image(imageName) {
    this.name = imageName.slice(0, imageName.indexOf('.')); //extracts the filename from file extension. Found on stackoverflow
    this.id = imageName;       
    this.src = `img/${imageName}`;
    // this.shown = false;
    this.clicks = 0;
    this.views = 0;

    imageArray.push(this);  
    // Pushes each Image object into array on line 5.
}

//------------------------------ New products. Each includes two arguments.

let newImages = [   

    'bag.jpg',
    'banana.jpg',
    'bathroom.jpg',
    'boots.jpg',
    'breakfast.jpg',
    'bubblegum.jpg',
    'chair.jpg',
    'cthulhu.jpg',
    'dog-duck.jpg',
    'dragon.jpg',
    'pen.jpg',
    'pet-sweep.jpg',
    'scissors.jpg',
    'shark.jpg',
    'sweep.png',  // only .png image
    'tauntaun.jpg',
    'unicorn.jpg',
    'water-can.jpg',
    'wine-glass.jpg',
];
    
for (let i=0; i < newImages.length; i++){
    new Image(newImages[i]);
    // imageArray.push(new Image(newImages[i]));
};

    //------------------------------ Function: generates a random index/image in array on line 5.

function randomImage() {
    let index = Math.floor(Math.random() * imageArray.length); 
    return imageArray[index];
    // return Math.floor(Math.random() * imageArray.length); 
}

//------------------------------ Function to display images

function renderImages() {   //previously displayImages function. 

    let image1 = randomImage();
    let image2 = randomImage();
    let image3 = randomImage();

    console.log(image1, image2, image3);

      // Use of while loops to ensure 3 unique images.
    while (image1 === image2 || image1 === image3 || image2 === image3) {
        image2 = randomImage();
        image3 = randomImage();
    }
            // previous while loops
        // while (image1.id === image2.id || image1.id === image3.id) { 
        //     image1 = randomImage();
        // }
        // while (image2.id === image1.id || image2.id === image3.id) {
        //     image2 = randomImage();
        // }
        // while (image3.id === image1.id || image3.id === image2.id) {
        //     image3 = randomImage();
        // }
console.log(imageElements);

    imageElements[0].id = image1.id;
    imageElements[0].src = image1.src; 

    imageElements[1].id = image2.id;
    imageElements[1].src = image2.src; 

    imageElements[2].id = image3.id;
    imageElements[2].src = image3.src; 

    console.log(image1, image2, image3);

   image1.views++;
   image2.views++;
   image3.views++; 

    //    for (let i=0; i<imageArray.length; i++){
    //     imageArray[i].shown = false;
    //    }

    //    image1.shown = true;
    //    image2.shown = true;
    //    image3.shown = true;
}

//------------------------------ Function - addEventListener to each imageElement

function eventAddListener() {
    imageElements.forEach(function(img){
        img.addEventListener('click', clickFunction); // adds event listener to each imageElement.
    } );
}
eventAddListener();

//------------------------------ // Function - increments clicks and rounds, and removes

function clickFunction(event){     

    for (let i=0; i < imageArray.length; i++) {
        if (event.target.id === imageArray[i].id){  // removed .id
                //if id from the event.target is same as the index in the object array, it increments.
            imageArray[i].clicks++;
            rounds++;
            break;
        } 
    }

    if (rounds === 25){      // once clicked set number of times, removes eventAddLsteners for each
        imageElements.forEach(function(img){
            img.removeEventListener('click', clickFunction);
            // voteResults();
        });

        //could do a message that voting is finished.
    }
  renderImages();  //calls renderImages function 
  if (rounds === 25) {
    voteResults();
    }
     
}

//------------------------------ Chart variables. 

let nameTotal = []; // voteResults() function/for loop pushes data into these empty arrays. 152-168
let clickTotal = [];
let viewTotal = [];

//------------------------------ Function - display results. Creates element <li> per each.

function voteResults() {

    let ul = document.getElementById('list');

    for(let i=0; i< imageArray.length; i++){

        nameTotal.push(imageArray[i].name);
        clickTotal.push(imageArray[i].clicks);
        viewTotal.push(imageArray[i].views);

        // let name = imageArray[i].name;  // Variables not needed because I referenced the array directly.
        // let clicks = imageArray[i].clicks;
        // let views = imageArray[i].views;

        let li = document.createElement('li')
        li.append(`${imageArray[i].name.toUpperCase()} has ${imageArray[i].clicks} clicks and ${imageArray[i].views} views.`);
        ul.appendChild(li);
    }

    let data = {        // chartjs info

        labels: nameTotal,
        datasets: [{
          label: 'Clicks',
          data: clickTotal,
          backgroundColor: ['rgba(255, 99, 132, 0.2)'],
          borderColor: ['rgb(255, 99, 132)'],
          borderWidth: 1},
        {
          label: 'Views',
          data: viewTotal,
          backgroundColor: ['rgba(255, 159, 64, 0.2)'],
          borderColor: ['rgb(255, 159, 64)'],
          borderWidth: 1
        }]
      };
    
      const config = {
          type: 'bar',
          data: data,
          options: {
              scales: {
                  y: {
                      beginAtZero: true
                    }
                }
            },
        };
        
        let chartElements = document.getElementById('myChart'); // global variables for chart
        let ctx = chartElements.getContext('2d');
        const myChart = new Chart(ctx, config);
    }
    
//------------------------------ Call functions

renderImages();














//           Older code


// //------------------------------ Constructor function and declared variables

// function Product(name, imgUrl) {
//     this.name = name;
//     this.imgUrl = imgUrl;
//     this.clicks = 0;
//     this.views = 0;
    
//     allProducts.push(this);
// }

// let bag = new Product('bag', 'bag.jpg');
// let banana = new Product('banana', 'banana.jpg');
// let bathroom = new Product('bathroom', 'bathroom.jpg');
// let boots = new Product('boots', 'boots.jpg');
// let breakfast = new Product('breakfast', 'breakfast.jpg');
// let bubblegum = new Product('bubblegum', 'bubblegum.jpg');
// let chair = new Product('chair', 'chair.jpg');
// let cthulhu = new Product('cthulhu', 'cthulhu.jpg');
// let dogDuck = new Product('dog-duck', 'dog-duck.jpg');
// let dragon = new Product('dragon', 'dragon.jpg');
// let pen = new Product('pen', 'pen.jpg');
// let petSweep = new Product('pet-sweep', 'pet-sweep.jpg');
// let scissors = new Product('scissors', 'scissors.jpg');
// let shark = new Product('shark', 'shark.jpg');
// let sweep = new Product('sweep', 'sweep.png');  // only .png image
// let tauntaun = new Product('tauntaun', 'tauntaun.jpg');
// let unicorn = new Product('unicorn', 'unicorn.jpg');
// let waterCan = new Product('water-can', 'water-can.jpg');
// let wineGlass = new Product('wine-glass', 'wine-glass.jpg');

// // console.log(allProducts[15]);

// //------------------------------ Variable: Counts total rounds. ++ each time an image is clicked

// let currentRound = 0;

// //------------------------------- Function: Generates random Image

// function randomImage() {
//     return Math.floor(Math.random() * allProducts.length);
// }

// //------------------------------ Function upon page load...show new image..
// function onPageLoad() {
//     let product1 = allProducts[randomImage()]; 
//     let product2 = allProducts[randomImage()];  
//     let product3 = allProducts[randomImage()];
    
//     let image1 = document.getElementById('product-image1'); 
//     image1.src = `img/${product1.imgUrl}`;
    
//     let image2 = document.getElementById('product-image2');
//     image2.src = `img/${product2.imgUrl}`;
    
//     let image3 = document.getElementById('product-image3');
//     image3.src = `img/${product3.imgUrl}`;
// }
// onPageLoad();

// //------------------------------- Event Listener for each button

// let button1 = document.getElementById('product-button1');
// button1.addEventListener('click', showNewImage);

// let button2 = document.getElementById('product-button2');
// button2.addEventListener('click', showNewImage);

// let button3 = document.getElementById('product-button3');
// button3.addEventListener('click', showNewImage);



// //------------------------------- Function: display new 3 images 

// function showNewImage(event) {  //event is being clicked
//     // console.log(event);
    
//     // Selects random object (image) from array.
//     let product1 = allProducts[randomImage()]; 
//     let product2 = allProducts[randomImage()];  
//     let product3 = allProducts[randomImage()];

//     // let array = ;

//     // while(product1 === product2 || product1 === product3 || product2 === product3){

//     // }

//     product1.views++;   // Increments views per object randomly selected.
//     product2.views++;
//     product3.views++;
    
//     let image1 = document.getElementById('product-image1'); 
//     image1.src = `img/${product1.imgUrl}`;
//     image1.alt = product1.name;
    
//     let image2 = document.getElementById('product-image2');
//     image2.src = `img/${product2.imgUrl}`;
//     image2.alt = product2.name;
    
//     let image3 = document.getElementById('product-image3');
//     image3.src = `img/${product3.imgUrl}`;
//     image3.alt = product3.name;

//     console.log(event);

//     currentRound++;

//         //-----------------------------------For loop: to get clicked total per object

//     let altName = event.target.alt;
//     for (let i = 0; i < allProducts.length; i++){
//         if (allProducts[i].name == altName) {

//             console.log(allProducts[i].name);

//             allProducts[i].clicks++;
//         }
//     }

//         if (currentRound === 5) {
//         button1.removeEventListener('click', showNewImage);
//         button2.removeEventListener('click', showNewImage);
//         button3.removeEventListener('click', showNewImage);
//     }
// }

// // showNewImage();

// //------------------------------- Function:

// //------------------------------- 

// console.log(allProducts);




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

