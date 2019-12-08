
//sound visual
let mic, fft, w;

//canvas


function windowResized() {
 resizeCanvas(windowWidth, windowHeight);
}


function setup() {
//canvas locked on screen
 var canvas = createCanvas(windowWidth, windowHeight);
 canvas.position(0,0);
 canvas.style('z-index', '-1');

//sound visual
 mic = new p5.AudioIn();
 mic.start();
 fft = new p5.FFT(0.9, 512);
 fft.setInput(mic);
 w = width/100;

 let lang = navigator.language || 'en-US';
 let speechRec = new p5.SpeechRec(lang, gotSpeech);

 let continuous = true;
 let interm = false;
 speechRec.start(continuous, interm);

 function gotSpeech() {
   if (speechRec.resultValue) {
     createP(speechRec.resultString);
   }
 }

}

function draw() {
 clear();

 // stroke(0);
 // line(0, 280, 1900, 280);
 //
 // stroke(0);
 // line(0, 780, 1900, 780);


 var spectrum = fft.analyze();
 // console.log(spectrum);
  noStroke();
  // translate(width/2, height/2);
  for (var i = 0; i < spectrum.length; i++) {
   var amp = spectrum[i];
   var y = map(amp, 0, 100, height, 0);
   fill(i, 30);
   rect(i * w, y, w- 2, height - y);
  }


}
