let radius = 200;

//set milliseconds to wait before allowing a new mouse action
let wait = 800;
let time;

function setup() {
    createCanvas(500, 500);
    background(2, 0, 130);
    noStroke();

    //call the sleep function in setup() so that it only happens once at the beginning
    //passing in numbers and the "saturday morning" function
    sleep(8, 5, saturdayMorning);

    //initialize timing
    time = millis();
}

function draw() {

    //listen for mouse to be pressed
    //test whether we've waited long enough
    if (mouseIsPressed && millis() - time > wait) {

        //randomize the background color
        r = random(0, 255);
        g = random(0, 255);
        b = random(0, 255);
        background(r, g, b);
        drawSun();

        //record the time when the mouse was last pressed
        time = millis();
    }
}

function sleep(hours, pillows, wakeup) {
    //convert "hours" of sleep to milliseconds
    let time = hours * 1000;

    //make an ellipse with soft edges
    for (i = 0; i < radius; i++) {
        fill(1, 1, 20, 10);
        ellipse(width / 2, height / 2, i);
    }

    //make soft-edged ellipses for the number of pillows you have
    for (i = 0; i < pillows - 1; i++) {
        let x = random(0 + 100, width - 100);
        let y = random(0 + 100, height - 100);
        let pillowRad = random(60, 150);
        for (j = 0; j < pillowRad; j++) {
            fill(255, 10);
            ellipse(x, y, j, j);
        }
    }

    //drawing to the canvas is very fast (unlike loading a heavy file). 
    //We could call this function immediately, 
    //but then the sleep function would happen too quickly to see.
    //wakeup();

    //setTimeout is a JavaScript function using a callback 
    //It waits a given amount of time before calling the function
    //we'll use it to simulate waiting for a file to load, API response, etc.
    setTimeout(wakeup, time);
}

//this is the function we'll pass in for a callback.
//you could make a different function to pass in.
function saturdayMorning(timeCalled) {
    console.log("saturday morning!");

    //draw a bright blue background with a sun in front
    background(196, 247, 255);
    drawSun();
}


function drawSun() {
    //draw white and yellow circles with soft edges
    for (i = 0; i < radius + 40; i++) {
        fill(255, 10);
        ellipse(width / 2, height / 2, i);
    }
    for (i = radius - 10; i > 0; i -= 2) {
        let g = map(i, radius - 10, 0, 209, 100);
        fill(255, g, 3, 10);
        ellipse(width / 2, height / 2, i);
    }
}