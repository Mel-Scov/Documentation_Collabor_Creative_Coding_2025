//reproducing image by Anton Bruhin
//Seestücke series
//Seestück 16, 2001
//by Melissa Scovell

//let bottomCanv = 594
let bezierX
let bezierY
let bezierX2
let bezierY2

function setup() {
    createCanvas(windowWidth, windowHeight);
    background(255);
    bezierX = random(windowWidth); 
    bezierY = random(windowHeight);
    bezierX2 = random(windowWidth); 
    bezierY2 = random(windowHeight); 


  }
  
  function draw() {
    //backround lines
    //is there a way to produce an exact amount of lines?
    for (let y = 0; y < windowHeight; y += 4) {
      strokeWeight(2);
      stroke(0);
      line(0, y, windowWidth, y);
    }

    stroke(255);
    fill(0, 10);
    bezier(100, bezierY, mouseX, mouseY, mouseX, bezierY, bezierX, 50);

    //stroke(255, 0, 0);
    //fill(0, 255, 0, 5);
    //bezier(bezierX + 100, bezierY * 3, mouseX, mouseY, mouseX, mouseY, bezierX * 2, bezierY - 50);
    
    stroke(0);
    fill(100, 5);
    bezier(bezierX2, bezierY2, mouseX, mouseY, bezierX2, mouseY, 700, bezierY2);

  }
  