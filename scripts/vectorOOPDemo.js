function Ball() {
  this.pos = createVector(random(0, width), random(0, height));
  this.vel = createVector(random(-5, 5), random(-5, 5));
  this.rad = random(20, 50);

  this.update = function () {
    this.pos.add(this.vel);
    if (this.pos.x > width || this.pos.x < 0) {
      this.vel.x = -this.vel.x;
    }
    if (this.pos.y > height || this.pos.y < 0) {
      this.vel.y = -this.vel.y;
    }
  };
  this.draw = function () {
    fill(0, 5);
    ellipse(this.pos.x, this.pos.y, this.rad);
  };
}

let balls = [];
numBalls = 50000;

function setup() {
  createCanvas(900, 900);
  noStroke();
  for (let i = 0; i < numBalls; i++) {
    let ball = new Ball();
    balls.push(ball);
  }
}

function draw() {
  background(255);

  for (let i = 0; i < numBalls; i++) {
    balls[i].update();
    balls[i].draw();
  }
}