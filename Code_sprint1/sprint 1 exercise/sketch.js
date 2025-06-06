function setup() {
    // only happens once when the page loads 
    createCanvas(600, 600);
    background(0, 0, 255);
}
function draw() { 
//red rectangle
fill(255, 0, 0);
stroke(255, 255, 0);
strokeWeight(3);
rect(50, 25, 300, 120);

//green circle
fill(0, 255, 0, 200);
stroke(0, 0, 255);
strokeWeight(2);
circle(200, 125, 100);

//black line
stroke(0, 0 ,0);
strokeWeight(9);
line(100, 0, 350, 400);

    
}