let mic, fft, w;
var canvas;

function setup() {
 canvas = createCanvas(1400,700);
 canvas.position(300,7300);

 colorMode(HSB);
 mic = new p5.AudioIn();
 mic.start();
 fft = new p5.FFT(0.9, 512);
 fft.setInput(mic);
 w = width/100;
}

function draw() {
 background(255);

 var spectrum = fft.analyze();
 console.log(spectrum);
  noStroke();
  // translate(width/2, height/2);
  for (var i = 0; i < spectrum.length; i++) {
   var amp = spectrum[i];
   var y = map(amp, 0, 100, height, 0);
   fill(i, 255, 255);
   rect(i * w, y, w- 2, height - y);
  }
  stroke(255);
  noFill();



}
