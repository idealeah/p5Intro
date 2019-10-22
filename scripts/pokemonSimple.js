//create our pokemon class
function Pokemon(
  name,
  type,
  length,
  battleStats,
) {
  //properties
  this.name = name;
  this.type = type;
  this.length = length;
  this.battleStats = battleStats;

  //a method
  this.greeting = function () {
    alert("this is " + this.name + "!");
  };
}









//now let's make the sketch itself

let mode; //which pokemon we are creating
let pikaPic;
let charPic;
let pikaColor;
let charColor;

//store all our pokemon objects
let pokemonArray = [];

function preload() {
  //load our pokemon images
  pikaPic = loadImage("assets/pikachuSmall.png"); // Load the image
  charPic = loadImage("assets/charizardSmall.png"); // Load the image
}

function setup() {
  createCanvas(800, 500);
  background(222, 254, 255);
  noStroke();

  //set up some colors
  pikaColor = color(255, 255, 0);
  charColor = color(255, 174, 0);
}

function draw() {
  background(222, 254, 255);
  //iterate through the array of pokemon objects, drawing and updating each one
  for (let i = 0; i < pokemonArray.length; i++) {
    pokemonArray[i].update();
    pokemonArray[i].draw();
    //test for collisions
    for (let j = 0; j < pokemonArray.length; j++) {
      let positionData1 = pokemonArray[i].positionData;
      let positionData2 = pokemonArray[j].positionData;
      let distance = positionData1.position.dist(positionData2.position);
      if (
        distance <= positionData1.radius / 2 + positionData2.radius / 2 &&
        distance !== 0
      ) {
        console.log("overlap");
      }
    }
  }
}

function mousePressed() {
  //store the current mouse position
  let position = createVector(mouseX, mouseY);
  //instantiate a new pokemon depending on which mode has been selected
  if (mode == "p") {
    //instatiate an object!
    let pikachu = new Pokemon(
      "Pikachu",
      "electric",
      16,
      [1, 0, 1],
      pikaColor,
      pikaPic,
      position
    );
    //add our new pikachu to the array
    pokemonArray.push(pikachu);
    //have our pokemon draw and greet us
    pikachu.draw();
    pikachu.greeting();
    //print it to the console so we can see it
    console.log(pikachu);
  }
  if (mode == "c") {
    //instatiate an object!
    let charizard = new Pokemon(
      "Charizard",
      "fire",
      67,
      [1, -30, 3],
      charColor,
      charPic,
      position
    );
    //add our new charizard to the array
    pokemonArray.push(charizard);
    //have our pokemon draw and greet us
    charizard.draw();
    charizard.greeting();
    //print it to the console so we can see it
    console.log(charizard);
  }
}

//set the mode based on which key is typed
function keyTyped() {
  mode = key;
}