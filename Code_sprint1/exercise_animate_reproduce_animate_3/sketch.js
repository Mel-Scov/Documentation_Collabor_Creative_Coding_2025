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
    for (let y = 0; y < 594; y = y + 4) {
      strokeWeight(2);
      stroke(0);
      line(0, y, 594, y);
    }
  
    //parallépipède ractangle face blanche dessous
    fill(255);
    noStroke();
    quad(220, 594, 435, 500, 265, 500, 50, 594);
  
    //parallépipède rectangle faces noires
    fill(0);
    noStroke();
    rect(50, 384, 170, 210);
    rect(265, 290, 170, 210);
  
    //parallépipède rectangle face blanche dessus
    fill(255);
    noStroke();
    quad(220, 384, 435, 290, 265, 290, 50, 384); //why does x4 and y4 not arrive to the same point as for the black part? lol was because of the stroke
  
    //weird black and white round diamonds thingies
    //use ellipse
    //for Width: 100 + (ellipseWidth - 8) * 10
    //ellipseHeight is not only for hight its just a variable but flemme to change all of it
    for (
      let ellipseHeight = 1;
      ellipseHeight < 10;
      ellipseHeight = ellipseHeight + 1
    ) {
      //console.log(ellipseHeight % 2);
  
      if (ellipseHeight % 2 == 0) {
        fill(0);
      } else {
        fill(255);
      }
      strokeWeight(2);
      noStroke();
      translate(mouseX, mouseY);
      ellipse(0, 0, 150 + (ellipseHeight - 8) * 10, 10 * 20 - ellipseHeight * 20); //how do i get more stripes?
  
      //maybe play with blendMode like inverting b/w
  
      for (let x = 235; x < 520; x = x + 1)
        ellipse(
          x,
          485,
          150 + (ellipseHeight - 8) * 10,
          10 * 20 - ellipseHeight * 20
        );
    }
    //grey onion ellipses
    //use same function as before but change it a bit with variable onion insted of ellipse Height
    /*for( let onion = 7; onion < 10; onion = onion + 1) {
      if (onion % 2 == 0) {
        fill(100);
      } else {
        fill(255);
      }
       ellipse(
        220,
        200,
        300 + (onion - 8) * 10,
        10 * 20 - onion * 20
      );
    }*/
  }
  