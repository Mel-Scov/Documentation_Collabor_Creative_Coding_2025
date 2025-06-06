//reproducing image by Anton Bruhin
//Seestücke series
//Seestück 16, 2001
//by Melissa Scovell

//check out variables tutoriels
//take it out of p5

let centerCanvX = 255
let centerCanvY = 297
function setup() {
    createCanvas(510, 594);
    background(255);
  }
  
  function draw() {
    //backround lines with a grid 
    //is there a way to produce an exact amount of lines?
    translate(centerCanvX, centerCanvY);
    let x = mouseX - centerCanvX;
    let y = mouseY - centerCanvY;
    let a = atan2(y, x);
    rotate(a);
    for (let y = 0; y < centerCanvY; y += 4) {
      strokeWeight(2);
      stroke(0, 10);
      line(0, y, centerCanvY, y);
    }
  }
  //x *= 2 is duplicating x each time 
  //x /= 2 is dividing x each time 
  //x -= 1 is redcuding x by one each time 
  