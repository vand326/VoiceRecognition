let mic, fft, w;

function setup() {
 createCanvas(700,700);
 colorMode(HSB);
 mic = new p5.AudioIn();
 mic.start();
 fft = new p5.FFT(0.9, 512);
 fft.setInput(mic);
 w = width/100;
}

function draw() {
 background(0);

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
