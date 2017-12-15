window.onload = init;

let canvas, ctx;
let audio_context;

let oscillations = [];
let frequences = [261.63, 293.66, 329.63, 349.23, 392, 440, 493.88, 523.25];
let gains = [];

function init(){
    console.log("Page chargée");

    canvas = document.querySelector("#CanvasPiano");
    ctx = canvas.getContext("2d");

    audio_context = new AudioContext();
    
    GraphAudio(8);

    InputNotes();

}

function GraphAudio(nTouches){
    for(let i = 0; i < nTouches; i++){
        
        oscillations[i] = audio_context.createOscillator();
        
        gains[i] = audio_context.createGain();
        gains[i].gain.value = 0;

        oscillations[i].frequency.value = frequences[i];
        oscillations[i].connect(gains[i]);

        gains[i].connect(audio_context.destination);

        oscillations[i].start();
    }
}

function InputNotes(){
    window.addEventListener('keydown', function(event){
        if(event.keyCode === 65){
            console.log("DO");
            gains[0].gain.value = 1;
        }else if(event.keyCode === 90){
            console.log("RE");
            gains[1].gain.value = 1;
        }else if (event.keyCode === 69) {
            console.log("MI");
            gains[2].gain.value = 1;
          } else if (event.keyCode === 82) {
            console.log("FA");
            gains[3].gain.value = 1;
          } else if (event.keyCode === 84) {
            console.log("SOL");
            gains[4].gain.value = 1;
          } else if (event.keyCode === 89){
              console.log("LA");
              gains[5].gain.value = 1;
          } else if(event.keyCode === 85){
              console.log("SI");
              gains[6].gain.value = 1;
          } else if(event.keyCode === 73){
              console.log("DO2");
              gains[7].gain.value = 1;
          }
          
    }, false);

    window.addEventListener('keyup', function(event){
        if (event.keyCode === 65) { 
            console.log("DO");
            gains[0].gain.value = 0;
          } else if (event.keyCode === 90) {
            console.log("RE");
            gains[1].gain.value = 0;
          } else if (event.keyCode === 69) {
            console.log("MI");
            gains[2].gain.value = 0;
          } else if (event.keyCode === 82) {
            console.log("FA");
            gains[3].gain.value = 0;
          } else if (event.keyCode === 84) {
            console.log("SOL");
            gains[4].gain.value = 0;
          } else if (event.keyCode === 89){
            console.log("LA");
            gains[5].gain.value = 0;
          } else if(event.keyCode === 85){
            console.log("SI");
            gains[6].gain.value = 0;
          } else if(event.keyCode === 73){
            console.log("DO2");
            gains[7].gain.value = 0;
        }
    }, false);
}