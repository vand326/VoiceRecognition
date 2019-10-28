var mic;

function setup() {
  createCanvas(700,700);
 mic = new p5.AudioIn();
 mic.start();
}

function draw() {
 background(0);
 var vol = mic.getLevel();


 ellipse(350, 350, vol * 1000 , vol * 1000);
 console.log(vol);


}
