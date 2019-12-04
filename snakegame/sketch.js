var s;
var scl = 20;

// let speech = new p5.SpeechRec('en-US', parseResult);
// speech.continuous = true;
// speech.interimResults = true;

var food;

var speech;
var mostrecentword = " ";

function setup () {
 createCanvas(1000, 1000);
 s = new snake();
 frameRate(5);
 pickLocation();



 speech = new p5.SpeechRec('en-US', parseResult);
 speech.continuous = true;
 speech.interimResults = false;

 speech.start();

 textSize(30);
 textAlign(CENTER);


}

function pickLocation() {
 var cols = floor(width/scl);
 var rows = floor(height/scl);
 food = createVector(floor(random(cols)), floor(random(rows)));
 food.mult(scl);
}

function draw () {
 background(100);
 s.update();
 s.show();
 // parseResult();
 if (s.eat(food)) {
   pickLocation();
 }

 fill(255);
 rect(food.x, food.y, scl, scl);


   if(mostrecentword.indexOf("up")!==-1){
     s.dir(0,-1);
   }if(mostrecentword.indexOf("down")!==-1){
     s.dir(0, 1);
   }if(mostrecentword.indexOf("right")!==-1){
     s.dir(1, 0);
   }if(mostrecentword.indexOf("left")!==-1){
     s.dir(-1, 0);
   }

   text(String(mostrecentword), width / 2, height / 2);
}

function snake() {
  this.x = 0;
  this.y = 0;
  this.xspeed = 1;
  this.yspeed = 0;

  this.eat = function(pos){
    var d = dist(this.x, this.y, pos.x, pos.y);
    if (d < 1){
      return true;
    } else {
      return false;
    }
  }

  this.dir = function(x, y){
   this.xspeed = x;
   this.yspeed = y;
  }

  this.update = function() {
    this.x = this.x + this.xspeed*scl;
    this.y = this.y + this.yspeed*scl;

    this.x = constrain(this.x, 0, width - scl);
    this.y = constrain(this.y, 0, height - scl);
  }

  this.show = function() {
    fill(0);
    rect(this.x, this.y, scl, scl);
  }
}


function parseResult(){
  mostrecentword = speech.resultString.split(' ').pop();
  console.log(speech.resultString);
  console.log(speech.resultString.split(' ').length);
}
