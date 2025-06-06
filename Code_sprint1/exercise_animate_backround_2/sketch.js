//reproducing image by Anton Bruhin
//Seestücke series
//Seestück 16, 2001
//by Melissa Scovell

function setup() {
    createCanvas(510, 594);
    background(255);
  }
  
  function draw() {
    //backround lines
    //is there a way to produce an exact amount of lines?
    translate(255, 297);
    let a = atan(mouseX, mouseY);
    rotate(a);
    for (let y = 0; y < 297; y = y + 4) {
      strokeWeight(2);
      stroke(0);
      line(0, y, 297, y);
    }
  
  }
  