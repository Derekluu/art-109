let canvas;
let x = 0;
let y = 0;
let easing = 0.05;

function setup(){
    canvas = createCanvas(windowWidth, windowHeight);
    canvas.position(0, 0);
    canvas.style("z-index",-2)
    background (255);
}

function windowResized(){
    resizeCanvas(windowWidth, windowHeight);
}

function draw() {
    strokeWeight(0);
    background (255,50);
    fill(random(1,255),random(1,255),random(1,255),);

    x = x + ((mouseX - x) * easing)
    y = y + ((mouseY - y) * easing)
    ellipse(x, y, 30, 30)
}