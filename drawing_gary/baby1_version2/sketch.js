//thanks to chat gpt for rewritting it properly
let baby;

function preload() {
  // Use a relative path if hosted locally
  baby = loadImage('baby1.png');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
}

function draw() {
  imageMode(CENTER)
  image(baby, mouseX, mouseY); // Center the image
}