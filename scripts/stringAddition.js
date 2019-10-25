//set up some city strings
let cities = ["London", "Nairobi", "Minneapolis", " Tokyo", "New York"];
let buttons = [];
let weatherData;
let temperature;
let wind;
let hue;

function setup() {
    createCanvas(500, 500);
    //using HSB to demonstrate it
    colorMode(HSB);
    background(0);

    //make buttons
    for (let i = 0; i < cities.length; i++) {
        button = createButton(cities[i]);
        button.position(100 * (i + 1), 400);
        //when the button is pushed, call getWeather(i)
        button.mousePressed(getWeather.bind(this, i));
    }
}


function draw() {
    if (weatherData) {

        //draw the background
        background(hue, 100, 100);

        // This section draws an arrow pointing in the direction of wind
        push();
        translate(width / 2, height / 2);
        // Rotate by the wind's angle
        rotate(wind.heading() + PI / 2);
        noStroke();
        fill(255);

        stroke(0);
        strokeWeight(3);
        line(0, -36, 0, 36);

        noStroke();
        fill(0);
        triangle(0, -48, -10, -10, 10, -10);
        pop();
    }

}

//function that happens when a button is pushed
function getWeather(i) {

    //all our string elements
    let mainUrl = "http://api.openweathermap.org/data/2.5/weather?"
    //the city name variable
    let city = "q=" + cities[i];
    let units = "&units=imperial"
    let key = "&APPID=1b067cf07d577b3a8c9b080d1b786ffb";

    //add our string together
    let url = mainUrl + city + units + key;
    //load JSON file
    loadJSON(url, parseWeather);
}

function parseWeather(weather) {
    weatherData = weather;
    console.log(weatherData);

    //set a background hue
    hue = floor(map(weather.main.temp, 0, 100, 0, 100));

    // Get the angle (convert to radians)
    let angle = radians(Number(weather.wind.deg));
    // Get the wind speed
    let windmag = Number(weather.wind.speed);
    //make a vector
    wind = p5.Vector.fromAngle(angle);

}