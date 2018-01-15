window.onload = init;

let canvas, ctx;
let audio_context;

let oscillations = [];
let frequences = [261.63, 277.18, 293.66, 311.13, 329.63, 349.23, 369.99, 392, 415.30, 440, 466.16, 493.88, 523.25];
let gains = [];
let tableauTouches = [];

function init(){
    console.log("Page chargée");

    canvas = document.querySelector("#CanvasPiano");
    ctx = canvas.getContext("2d");

    audio_context = new AudioContext();
    
    GraphAudio(13);

    InputNotes();

    createToucheB(8);
    createToucheN(5);
    animation();
    console.log(tableauTouches);
}

function animation(){
  ctx.clearRect(0, 0, canvas.width, canvas.heigth);
  
  tableauTouches.forEach(function(r){   r.draw(ctx);    });

  requestAnimationFrame(animation);
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
            tableauTouches[0].couleur = "lightgrey";  
            console.log(tableauTouches[0]);
        }else if(event.keyCode === 50){
            console.log("DO# / REb");
            gains[1].gain.value = 1;
        }else if (event.keyCode === 90) {
            console.log("RE");
            gains[2].gain.value = 1;
            tableauTouches[1].couleur = "lightgrey";  
          } else if (event.keyCode === 51) {
            console.log("RE# / MIb");
            gains[3].gain.value = 1;
          } else if (event.keyCode === 69) {
            console.log("MI");
            gains[4].gain.value = 1;
            tableauTouches[2].couleur = "lightgrey"; 
            console.log(tableauTouches[4]);
          } else if (event.keyCode === 82){
              console.log("FA");
              gains[5].gain.value = 1;
              tableauTouches[3].couleur = "lightgrey"; 
          } else if(event.keyCode === 53){
              console.log("FA#");
              gains[6].gain.value = 1;
          } else if(event.keyCode === 84){
              console.log("SOL");
              gains[7].gain.value = 1;
              tableauTouches[4].couleur = "lightgrey"; 

          }else if(event.keyCode === 54){
            console.log("SOL# / LAb");
            gains[8].gain.value = 1;
        }else if (event.keyCode === 89) {
            console.log("LA");
            gains[9].gain.value = 1;
            tableauTouches[5].couleur = "lightgrey"; 

          } else if (event.keyCode === 55) {
            console.log("LA# / SIb");
            gains[10].gain.value = 1;
          } else if (event.keyCode === 85) {
            console.log("SI");
            gains[11].gain.value = 1;
            tableauTouches[6].couleur = "lightgrey"; 

          } else if (event.keyCode === 73){
              console.log("DO2");
              gains[12].gain.value = 1;
              tableauTouches[7].couleur = "lightgrey"; 

          } 
          
    }, false);

    window.addEventListener('keyup', function(event){
        if(event.keyCode === 65){
            console.log("DO");
            gains[0].gain.value = 0;
            tableauTouches[0].couleur = "white"; 
        }else if(event.keyCode === 50){
            console.log("DO# / REb");
            gains[1].gain.value = 0;
        }else if (event.keyCode === 90) {
            console.log("RE");
            gains[2].gain.value = 0;
            tableauTouches[1].couleur = "white"; 
          } else if (event.keyCode === 51) {
            console.log("RE# / MIb");
            gains[3].gain.value = 0;
          } else if (event.keyCode === 69) {
            console.log("MI");
            gains[4].gain.value = 0;
            tableauTouches[2].couleur = "white"; 
          } else if (event.keyCode === 82){
              console.log("FA");
              gains[5].gain.value = 0;
              tableauTouches[3].couleur = "white"; 
          } else if(event.keyCode === 53){
              console.log("FA#");
              gains[6].gain.value = 0;
          } else if(event.keyCode === 84){
              console.log("SOL");
              gains[7].gain.value = 0;
              tableauTouches[4].couleur = "white"; 
          }else if(event.keyCode === 54){
            console.log("SOL# / LAb");
            gains[8].gain.value = 0;
          }else if (event.keyCode === 89) {
            console.log("LA");
            gains[9].gain.value = 0;
            tableauTouches[5].couleur = "white"; 
          } else if (event.keyCode === 55) {
            console.log("LA# / SIb");
            gains[10].gain.value = 0;
          } else if (event.keyCode === 85) {
            console.log("SI");
            gains[11].gain.value = 0;
            tableauTouches[6].couleur = "white"; 
          } else if (event.keyCode === 73){
              console.log("DO2");
              gains[12].gain.value = 0;
              tableauTouches[7].couleur = "white"; 
          } 
          
    }, false);
}
 function createToucheB(nbr){
  let x = -100;
  for (let i = 0; i < 8; i++) {
  x = x + 100;
  let y = 0;
  let w = 50;
  let h = 300;
  let couleur = 'white';
  let touchesB = new Touche(x, y, w, h, couleur);

  tableauTouches.push(touchesB);
  console.log("Touche blanche crée");
  }
}
 function createToucheN(nbr){
  let x = -30;
  for (let i = 0; i < 5; i++) {
    if(i == 2){
      x = x +100;
    }
  x = x + 100;
  let y = 0;
  let w = 50;
  let h = 300;
  let couleur = "black";
  let touchesN = new Touche(x, y, w, h, couleur);

  tableauTouches.push(touchesN);
  console.log("Touche noire crée");

  }
 }

 class Touche{
   constructor(x,y,w,h,couleur){
     this.x = x;
     this.y = y;
     this.w = w;
     this.h = h;
     this.couleur = couleur;
   }
   draw(ctx){
    ctx.save();
    ctx.translate(this.x, this.y);
    
    ctx.fillStyle = this.couleur;
    ctx.beginPath();
    ctx.lineWidth="1";
    ctx.strokeStyle ="black";
      if(this.couleur == "black"){
        ctx.fillRect(0, 0,60, 200);
      }
      else{
        ctx.fillRect(0, 0,100, 350);
        ctx.strokeRect(0, 0,100, 350);
      }
    ctx.restore();
  }
 }
                                                                                        /*class touche{
                                                                                          constructor(x, y, w, h){
                                                                                            this.x = x;
                                                                                            this.y = y;
                                                                                            this.w = w;
                                                                                            this.h = h;
                                                                                          }
                                                                                        }

                                                                                      /* class toucheB extends touche{
                                                                                      constructor(x, y, w, h, couleurB){
                                                                                        super(x, y, w, h)
                                                                                        this.couleurB = couleurB;
                                                                                      }
                                                                                      draw(ctx){
                                                                                        ctx.save();
                                                                                        ctx.translate(this.x, this.y);
                                                                                        
                                                                                        ctx.fillStyle = this.couleurB;
                                                                                        ctx.beginPath();
                                                                                        ctx.lineWidth="1";
                                                                                        ctx.strokeStyle ="black";
                                                                                        ctx.fillRect(0, 0,100, 350);
                                                                                        ctx.strokeRect(0, 0,100, 350);
                                                                                        ctx.restore();
                                                                                      }
                                                                                    }
                                                                                    class toucheN extends touche{
                                                                                      constructor(x, y, w, h, couleurN){
                                                                                        super(x, y, w, h)
                                                                                        this.couleurN = couleurN;
                                                                                      }
                                                                                      draw(ctx){
                                                                                        ctx.save();
                                                                                        ctx.translate(this.x, this.y);
                                                                                        
                                                                                        ctx.fillStyle = this.couleurN;
                                                                                        
                                                                                        ctx.fillRect(0, 0,60, 200);
                                                                                        
                                                                                        
                                                                                        ctx.restore();
                                                                                      }
                                                                                    }
/*function drawPiano(){
        ctx.save();

        ctx.translate(0,0);
        
        ctx.fillStyle = "lightGrey";
        ctx.fillRect(0, 0, 45, 150);

        ctx.restore();
    }*/