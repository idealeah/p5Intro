let birdImg;

function preload() {
    birdImg = loadImage("./assets/bird2.jpg");
}

function setup() {
    createCanvas(500, 500);

}

function draw() {
    birdImg.loadPixels();

    console.log(birdImg.pixels);
    for (var y = 0; y < birdImg.height; y++) {
        for (var x = 0; x < birdImg.width; x++) {
            var in_color = getQuick(birdImg, x, y);

            var r = red(in_color);
            var g = green(in_color);
            var b = blue(in_color);

            var out_color;
            if (r < 150) {
                out_color = color(255, 0, 0);
            } else {
                out_color = color(0, 0, 255);
            }

            birdImg.set(x, y, out_color);
            birdImg.updatePixels();
        }
    }

    noSmooth();
    image(birdImg, 0, 0, width, height);

    noLoop();
}

function getQuick(img, x, y) {

    var i = (y * img.width + x) * 4;
    return [
        img.pixels[i],
        img.pixels[i + 1],
        img.pixels[i + 2],
        img.pixels[i + 3],
    ];
}