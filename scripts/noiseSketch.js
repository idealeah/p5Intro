let dotColor;
let dotRad = 50;

function setup() {
  createCanvas(640, 480);
  dotColor = color(20, 255, 250);
  noStroke();
}

function draw() {
  fill(dotColor);
  ellipse(mouseX, mouseY, dotRad, dotRad);

  if (mouseIsPressed) {
    let r = noise(frameRate() / 300, millis() / 300) * 200;
    let g = noise(millis() / 300) * 200;
    let b = 230;
    dotColor = color(r, g, b);
    dotRad = noise(millis() / 400) * 100;
  }

  console.log(dotColor);
}
