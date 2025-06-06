//thanks to chat gpt for rewritting it properly
//tutorial by The Coding Train to load images

let babeA;
let babeB;
let babeC;

function preload() {
  // Use a relative path if hosted locally
  babeA = loadImage('babeA.png');
  babeB = loadImage('babeB.png');
  babeC = loadImage('babeC.png');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
}

function draw() {
  imageMode(CENTER)
  //image(babeA, mouseX, mouseY, 300, height);
  let x = random(0, windowWidth);
  let y = random(0, windowHeight);
  image(babeB, x, y);
}