let dotColor;
let dotRad = 50;

function setup() {
  createCanvas(640, 480);
  background(130, 205, 255);
  dotColor = color(255, 255, 255, 0);
  noStroke();

  //grass
  fill(80, 156, 50);
  rect(0, height - height / 4, width, height / 4);

  for (j = 0; j < 5; j++) {
    push();
    translate(random(0, width), height - height / 2);
    //tree trunk
    fill(138, random(30,100), 1);
    rect(0, random(-10, 50), 25, 150);

    //tree leaves
    for (i = 0; i < 100; i++) {
      fill(random(180, 255), 159 - j*10, j*5);
      ellipse(random(-50, 50 + j*4), random(-50, 50 + j*4), random(20, 50 + j*4), random(20, 50  + j*4));
    }
  pop();
  }
}

function draw() {
  if (mouseIsPressed) {
    let r = 255;
    let g = 255;
    let b = 255;
    let t = random(0, 35);
    radius = random(10, 30);
    dotColor = color(r, g, b, t);
    dotRad = random(25, 50);
    fill(r, g, b, t);
    ellipse(mouseX, mouseY, radius, radius);
  }
}