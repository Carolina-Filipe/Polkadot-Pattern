//Exercise inspired by The Coding Train using P5.js library
let x, y, r, g, b;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
}

function draw() {
  r = random(255);
  g = random(255);
  b = random(255);
  x = random(width);
  y = random(height);
  fill(r, g, b, 150);
  noStroke();
  circle(x, y, 20);
}

function mouseClicked() {
  background(0);
}
