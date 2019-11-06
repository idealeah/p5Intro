function Ball() {
    this.radius = random(20, 50);
    this.pos = createVector(random(0, width), random(0, height));
    this.vel = createVector(random(-5, 5), random(-5, 5));
    this.update = function () {
        this.pos.add(this.vel);
    }
    this.draw = function () {
        ellipse(this.pos.x, this.pos.y, this.radius);
    }
}

let balls = [];
ballNum = 20;

function setup() {
    createCanvas(800, 800);
    for (let i = 0; i < ballNum; i++) {
        ball = new Ball();
        balls.push(ball);
    }
}

function draw() {
    console.log(balls);
    for (let i = 0; i < ballNum; i++) {
        balls[i].update();
        balls[i].draw();
    }
}