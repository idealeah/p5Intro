// A wind direction vector
let wind;
// Circle position
let position;
//background color
let backgroundColor;
let red;

function setup() {
  createCanvas(720, 300);
  backgroundColor = color(255, 255, 255);
  // Circle starts in the middle
  position = createVector(width / 2, height / 2);
  // wind starts as (0,0)
  wind = createVector();
  //set URL for weather JSON
  let url = 'http://api.openweathermap.org/data/2.5/weather?q=London,uk&units=imperial&APPID=1b067cf07d577b3a8c9b080d1b786ffb';
  //load JSON file
  loadJSON(url, gotWeather);
}

function draw() {
  background(backgroundColor);

  // This section draws an arrow pointing in the direction of wind
  push();
  translate(32, height - 32);
  // Rotate by the wind's angle
  rotate(wind.heading() + PI / 2);
  noStroke();
  fill(255);
  ellipse(0, 0, 48, 48);

  stroke(45, 123, 182);
  strokeWeight(3);
  line(0, -16, 0, 16);

  noStroke();
  fill(45, 123, 182);
  triangle(0, -18, -6, -10, 6, -10);
  pop();

  // Move in the wind's direction
  position.add(wind);

  stroke(0);
  fill(51);
  ellipse(position.x, position.y, 16, 16);

  if (position.x > width) position.x = 0;
  if (position.x < 0) position.x = width;
  if (position.y > height) position.y = 0;
  if (position.y < 0) position.y = height;
}

function gotWeather(weather) {

  console.log(weather);

  // Get the angle (convert to radians)
  let angle = radians(Number(weather.wind.deg));
  // Get the wind speed
  let windmag = Number(weather.wind.speed);

  console.log(angle, windmag);

  // Display as HTML elements
  let temperatureDiv = createDiv(floor(weather.main.temp) + '&deg;');
  let windDiv = createDiv("WIND " + windmag + " <small>MPH</small>");

  // Make a vector
  wind = p5.Vector.fromAngle(angle);
  console.log(wind);

  //set background color to temperature
  red = floor(map(weather.main.temp, 0, 100, 0, 255));
  backgroundColor = color(red, 255, 255);
}