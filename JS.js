window.onload = init;

let canvas, ctx;
let audio_context;

let oscillations = [];
let frequences = [261.63, 277.18, 293.66, 311.13, 329.63, 349.23, 369.99, 392, 415.30, 440, 466.16, 493.88, 523.25];
let gains = [];

function init(){
    console.log("Page chargée");

    canvas = document.querySelector("#CanvasPiano");
    ctx = canvas.getContext("2d");

    audio_context = new AudioContext();
    
    GraphAudio(13);

    InputNotes();

    drawPiano();

}

function GraphAudio(nTouches){
    for(let i = 0; i < nTouches; i++){
        
       /* let mod = document.getElementById('modulation');
        console.log(mod); */

        oscillations[i] = audio_context.createOscillator();
        
        gains[i] = audio_context.createGain();
        gains[i].gain.value = 0;

        oscillations[i].frequency.value = frequences[i] /* * Math.pow(2, mod)*/;
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
        }else if(event.keyCode === 50){
            console.log("DO# / REb");
            gains[1].gain.value = 1;
        }else if (event.keyCode === 90) {
            console.log("RE");
            gains[2].gain.value = 1;
          } else if (event.keyCode === 51) {
            console.log("RE# / MIb");
            gains[3].gain.value = 1;
          } else if (event.keyCode === 69) {
            console.log("MI");
            gains[4].gain.value = 1;
          } else if (event.keyCode === 82){
              console.log("FA");
              gains[5].gain.value = 1;
          } else if(event.keyCode === 53){
              console.log("FA#");
              gains[6].gain.value = 1;
          } else if(event.keyCode === 84){
              console.log("SOL");
              gains[7].gain.value = 1;
          }else if(event.keyCode === 54){
            console.log("SOL# / LAb");
            gains[8].gain.value = 1;
        }else if (event.keyCode === 89) {
            console.log("LA");
            gains[9].gain.value = 1;
          } else if (event.keyCode === 55) {
            console.log("LA# / SIb");
            gains[10].gain.value = 1;
          } else if (event.keyCode === 85) {
            console.log("SI");
            gains[11].gain.value = 1;
          } else if (event.keyCode === 73){
              console.log("DO2");
              gains[12].gain.value = 1;
          } 
          
    }, false);

    window.addEventListener('keyup', function(event){
        if(event.keyCode === 65){
            console.log("DO");
            gains[0].gain.value = 0;
        }else if(event.keyCode === 50){
            console.log("DO# / REb");
            gains[1].gain.value = 0;
        }else if (event.keyCode === 90) {
            console.log("RE");
            gains[2].gain.value = 0;
          } else if (event.keyCode === 51) {
            console.log("RE# / MIb");
            gains[3].gain.value = 0;
          } else if (event.keyCode === 69) {
            console.log("MI");
            gains[4].gain.value = 0;
          } else if (event.keyCode === 82){
              console.log("FA");
              gains[5].gain.value = 0;
          } else if(event.keyCode === 53){
              console.log("FA#");
              gains[6].gain.value = 0;
          } else if(event.keyCode === 84){
              console.log("SOL");
              gains[7].gain.value = 0;
          }else if(event.keyCode === 54){
            console.log("SOL# / LAb");
            gains[8].gain.value = 0;
          }else if (event.keyCode === 89) {
            console.log("LA");
            gains[9].gain.value = 0;
          } else if (event.keyCode === 55) {
            console.log("LA# / SIb");
            gains[10].gain.value = 0;
          } else if (event.keyCode === 85) {
            console.log("SI");
            gains[11].gain.value = 0;
          } else if (event.keyCode === 73){
              console.log("DO2");
              gains[12].gain.value = 0;
          } 
          
    }, false);
}

    function drawPiano(){
        ctx.save();

        ctx.translate(0,0);
        
        ctx.fillStyle = "lightGrey";
        ctx.fillRect(0, 0, 60, 300);

        ctx.restore();
    }