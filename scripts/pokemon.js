function Pokemon(name, type, length, battleStats, mainColor, imgName, location) {
    this.name = name;
    this.type = type;
    this.length = length;
    this.battleStats = battleStats;
    this.theme = {
        mainColor: mainColor,
        imgName: imgName
    };
    this.positionData = {
        location: location,
        velocity: createVector(random(-5, 5), random(-5, 5))
    };
    this.greeting = function () {
        alert('this is ' + this.name + '!');
    };
    this.asleep = function () {
        alert('zzzzzzzz');
    };
    this.confused = function () {
        alert('confused!');
    };
    this.paralyzed = function () {
        alert("I can't move!");
    };
    this.update = function () {
        this.positionData.location += this.positionData.velocity;
    };
    this.draw = function () {
        push();
        translate(this.positionData.location);
        fill(mainColor);
        ellipse(0, 0, imgName.width / 4, imgName.width / 4)
        image(imgName, -imgName.width / 8, -imgName.height / 8, imgName.width / 4, imgName.height / 4);
        pop();
    };
}

//function ElectricType() {
//    Pokemon.call(this, )
//}

let mode;
let pikachu;
let charizard;
let pikaPic;
let charPic;
let pikaColor;
let charColor;
let pokemonArray = [];

function preload() {
    pikaPic = loadImage('assets/pikachu.png'); // Load the image
    charPic = loadImage('assets/charizard.png'); // Load the image
}

function setup() {
    createCanvas(800, 500);
    background(222, 254, 255);
    noStroke();
    pikaColor = color(255, 255, 0);
    charColor = color(255, 174, 0);
}

function draw() {
    background(222, 254, 255);
    console.log(pokemonArray);
    for (i = 0; i < pokemonArray.length; i++) {
        pokemonArray[i].update;
        pokemonArray[i].draw;
        console.log[i];
    }
}

function mousePressed() {
    let location = createVector(mouseX, mouseY);
    if (mode == 'p') {
        pikachu = new Pokemon('Pikachu', 'electric', 16, [1, 0, 1], pikaColor, pikaPic, location);
        pokemonArray.push(pikachu);
        pikachu.greeting();
        pikachu.draw();
        console.log(pikachu);
    }
    if (mode == 'c') {
        charizard = new Pokemon('Charizard', 'fire', 67, [1, -30, 3], charColor, charPic, location);
        pokemonArray.push(charizard);
        charizard.greeting();
        charizard.draw();
        console.log(charizard);
    }
}

function keyTyped() {
    mode = key;
}