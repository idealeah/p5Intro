let dotColor;
let dotRad = 50;

function setup() {
  createCanvas(800, 600);
  background(130, 205, 255);
  dotColor = color(255, 255, 255, 0);
  noStroke();
  angleMode(DEGREES);

  //grass
  fill(80, 156, 50);
  rect(0, height - height / 4, width, height / 4);

  for (j = 0; j < 5; j++) {
    push();
    translate(random(0, width), height - height / 2.25 + (random(-50, 30)));
    //tree trunk
    fill(random(50, 100), random(10, 50), 1);
    rect(0, 0, 25, 200);

    //tree leaves
    for (i = 0; i < 600; i++) {
      push()
      rotate(random(180));
      fill(random(180, 255 + j * 10), 159 - j * 20, j * 15);
      ellipse(random(-70, 70 + j * 3), random(-70, 70 + j * 3), random(10, 20 + j * 4), random(10, 20 + j * 4));
      pop();
    }
    pop();
  }
}

function draw() {
  if (mouseIsPressed) {
    let r = 255;
    let g = 255;
    let b = 255;
    let t = random(0, 20);
    radius = random(10, 30);
    dotColor = color(r, g, b, t);
    dotRad = random(25, 70);
    fill(r, g, b, t);
    ellipse(mouseX, mouseY, dotRad, dotRad);
  }
}