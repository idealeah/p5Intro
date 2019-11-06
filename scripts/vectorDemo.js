let radiusArray = [];
let positionArray = [];
let velocityArray = [];
numBalls = 10;

function setup() {
    createCanvas(500, 500);
    for (let i = 0; i < numBalls; i++) {
        let position = createVector(random(0, width), random(0, height));
        let velocity = createVector(random(-5, 5), random(-5, 5));
        let radius = random(20, 50);
        positionArray.push(position);
        velocityArray.push(velocity);
        radiusArray.push(radius);
    }
}

function draw() {
    background(255);
    console.log(positionArray);
    console.log(velocityArray);

    for (let i = 0; i < numBalls; i++) {
        fill(0);
        ellipse(positionArray[i].x, positionArray[i].y, radiusArray[i]);
        positionArray[i].add(velocityArray[i]);
        if (positionArray[i].x > width || positionArray[i].x < 0) {
            velocityArray[i].x = -velocityArray[i].x;
        }
        if (positionArray[i].y > height || positionArray[i].y < 0) {
            velocityArray[i].y = -velocityArray[i].y;
        }
    }
}