//create our pokemon class
function Pokemon(
  name,
  type,
  length,
  battleStats,
  position
) {
  //properties
  this.name = name;
  this.type = type;
  this.length = length;
  this.battleStats = battleStats;
  this.position = position;

  //a method
  this.greeting = function () {
    alert("this is " + this.name + "!");
  };
}


//now let's make the sketch itself

let mode; //which pokemon we are creating

//store all our pokemon objects
let pokemonArray = [];


function setup() {
  createCanvas(800, 500);
  background(222, 254, 255);
  noStroke();

}

function draw() {
  background(222, 254, 255);
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
      position
    );
    //add our new pikachu to the array
    pokemonArray.push(pikachu);
    //have our pokemon greet us
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
      position
    );
    //add our new charizard to the array
    pokemonArray.push(charizard);
    //have our pokemon greet us
    charizard.greeting();
    //print it to the console so we can see it
    console.log(charizard);
  }
}

//set the mode based on which key is typed
function keyTyped() {
  mode = key;
}