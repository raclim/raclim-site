let badBall; //bug object declared
let leftLeg;
let rightLeg;
let slider;


//random variables for jitter/slider
let randomMin = -5;
let randomMax = 5;
//rectangle variables for slider
let x = 200;
let y = 350;
let w = 10;
let h = 15;
let dragging = false; //is slider being dragged
let rollover = false; //is mouse over slider

//offset for dragging slider
let offsetX = 0;

//start and end of slider
let sliderStart = 200;
let sliderEnd = 400;

function setup() {
  createCanvas(windowWidth/2, windowHeight/2);
  ellipseMode(RADIUS);
  rectMode(RADIUS);

  badBall = new whoa();
  leftLeg = new jitteryLeft();
  rightLeg = new jitteryRight();
  slider = new jitterSlider();
}

function draw() {
  background(0);
  // badBall.move();
  // badBall.display();
  
  //legs
  leftLeg.display();
  rightLeg.display();
  slider.display();
  
  

  //neck
  noStroke();
  fill(230);
  rect(width / 2 + 3, height / 4 + 10, 13, 20);

  //ears
  arc(width / 2 - 27, height / 4 - 10, 10, 10, radians(60), radians(240)); //left
  arc(width / 2 + 33, height / 4 - 10, 10, 10, radians(290), radians(130)); //right

  //face
  fill(255);
  ellipse((width / 2) + 3, height / 5, 35, 40);
  
  //necklace
  fill(255,0,0);
  arc(width/2+3,height/4+30,15,15,radians(30),radians(150));

  //eyes - left
  fill(0);
  let leftEye = map(mouseX, 0, 600, (width / 2) - 17, (width / 2) - 17 + 8);
  arc(leftEye, (height / 5) - 5, 4, 4, PI, TWO_PI); //pupil
  stroke(0);
  strokeWeight(2);
  noFill();
  arc((width / 2) - 12, height / 5, 10, 10, radians(215), radians(320)); //lid

  //lashes - left
  arc((width / 2) - 23, (height / 5) - 8, 2, 2, radians(30), radians(180)); //further from center
  arc((width / 2) - 19, (height / 5) - 10, 2, 2, radians(60), radians(180)); //closer to center

  //eyes - right 
  noStroke();
  fill(0);
  let rightEye = map(mouseX, 0, 600, (width / 2) + 17, (width / 2) + 17 + 8);
  arc(rightEye, (height / 5) - 5, 4, 4, PI, TWO_PI); //pupil
  stroke(0);
  strokeWeight(2);
  noFill();
  arc((width / 2) + 20, height / 5, 10, 10, radians(215), radians(320)); //lid 

  //lashes - right
  arc((width / 2) + 30, (height / 5) - 8, 2, 2, TWO_PI, radians(150)); //further from center
  arc((width / 2) + 26, (height / 5) - 10, 2, 2, TWO_PI, radians(120)); //closer to center

  //nose 
  arc((width / 2) + 3, (height / 5) + 7, 4, 4, radians(60), radians(130));

  //mouth
  stroke(255, 0, 0);
  strokeWeight(3);
  arc((width / 2) + 3, (height / 5) + 25, 8, 6, radians(200), radians(320)); //upper lip
  arc((width / 2) + 3, (height / 5) + 19, 8, 6, radians(50), radians(140)); //lower lip

  //blush
  noStroke();
  fill(255, 200, 200);
  ellipse((width / 2) - 18, height / 5 + 5, 6, 6); //left
  ellipse((width / 2) + 24, height / 5 + 5, 6, 6); //right

  //hair
  fill(255, 0, 0);
  arc(width / 2 + 3, height / 10 + 15, 35, 22, radians(170), radians(10));
  ellipse(width / 2 - 30, height / 10, 20, 20); //left bun
  ellipse(width / 2 + 35, height / 10, 20, 20); //right bun
  fill(255);
  triangle(width / 2 + 2, height / 10 + 16, width / 2 + 3, height / 10 - 6, width / 2 + 4, height / 10 + 16); //middle part
  
}


function jitteryLeft() {
  this.display = function() {
  	this.leftLegX = map(mouseX, 0, 600, 80, 180);
    this.leftLegY = map(mouseY, 0, 400, height / 2, height / 2 + 10);
    
    noFill();
    stroke(255);
    strokeWeight(35);
    
    //mapping to slider
    this.newLeftMin = -50;
  	this.newLeftMax = 50;
  	this.b = map(x, sliderStart, sliderEnd-w,randomMin,this.newLeftMin);
  	this.e = map(x, sliderStart, sliderEnd-w,randomMax,this.newLeftMax);
  	this.haha = random(this.b,this.e);
    
    line(width / 2 + 3, height / 4 + 40, width / 2 - 120, this.leftLegY + this.haha);
    strokeWeight(19);
    line(width / 2 - 125, this.leftLegY + this.haha, this.leftLegX + this.haha, height * (3 / 4) + 20); //left-calf
    line(width / 2 - 105, this.leftLegY + this.haha, this.leftLegX + this.haha, height * (3 / 4) + 20); //left-calf-bip
    line(this.leftLegX + this.haha, height * (3 / 4) + 20, this.leftLegX - 30 + this.haha, height * (3 / 4) + 30); //foot
  };
}

function jitteryRight() {
  this.display = function() {
    this.rightLegX = map(mouseX + 900, 0, 600, 300, 400);
    this.rightLegY = map(mouseY, 0, 400, height / 2, height / 2 + 20);
    noFill();
    stroke(255);
    strokeWeight(35);
    
    //mapping to slider
    this.newRightMin = -50;
  	this.newRightMax = 50;
  	this.o = map(x, sliderStart, sliderEnd-w,randomMin,this.newRightMin);
  	this.h = map(x, sliderStart, sliderEnd-w,randomMax,this.newRightMax);
  	rightLeg.haha = random(this.o,this.h);
    
    line(width / 2 + 3, height / 4 + 40, width / 2 + 120, this.rightLegY + this.haha); //right-thigh
    strokeWeight(19);
    line(width / 2 + 125, this.rightLegY + this.haha, this.rightLegX + this.haha, height * (3 / 4) + 20); //right-calf
    line(width / 2 + 106, this.rightLegY + this.haha, this.rightLegX + this.haha, height * (3 / 4) + 20); //right-calf-bip
    line(this.rightLegX + this.haha, height * (3 / 4) + 20, this.rightLegX + 30 + this.haha, height * (3 / 4) + 30); //foot
    };
  }

//pulled from example slider (https://editor.p5js.org/projects/H1LXU9ah)
function jitterSlider() {
  this.display = function() {
    if (dragging) {
      x = mouseX + offsetX;
    }
    //keep rectangle within limits of slider
    x = constrain (x, sliderStart, sliderEnd - w);
    
    //draw a line for slider
    strokeWeight(2);
    stroke(255);
    line(sliderStart, y+h/2,sliderEnd,y+h/2);
    
    //fill according to state
    if (dragging){
      fill(255);
    } else {
      fill(175);
    }
    //rectangle for slider
    rect(x,y,w,h);
  };
}

function mousePressed() {
  //is slider clicked
  if (mouseX > x && mouseX < x + w && mouseY > y && mouseY < y+h) {
    dragging = true;
    //if so, keep track of relative location of click to corner or rect
    offsetX = x - mouseX;
  }
}

function mouseReleased() {
  //stop dragging
  dragging = false;
}

//ignore this function - for playing around
function whoa() {
  this.diameter = random(20, 50);
  this.x = random(width * (3 / 4), width);
  this.y = 0 + this.diameter;
  this.speed = 5;

  this.move = function() {
    if (this.y < 0 + this.diameter || this.y > height - this.diameter) {
      this.speed = this.speed * -1;
    }
    this.y = this.y + this.speed;
  };

  this.display = function() {
    noStroke();
    fill(255, 200, 200);
    ellipse(this.x, this.y, this.diameter, this.diameter);
 };
}