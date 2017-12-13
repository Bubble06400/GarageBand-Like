window.onload = init; 
let canvas, ctx;
// LES DEUX PROCHAINES LIGNES PERMETTENT D'INITIALISER LE CONTEXTE AUDIO. 
var audioCtx = window.AudioContext || window.webkitAudioContext;
var audioContext;

    function init(){
        console.log("PAGE CHARGEE");

        audioContext = new audioCtx();
        canvas = document.querySelector("#CanvasPiano");

        ctx = canvas.getContext("2d");
      
        drawPiano();
        InputTouche();
    } 

    function InputTouche(){
        window.addEventListener('keydown', function(event){
         //l'oscillateur permet de "creer" virtuellement un son a partir d'une sinusoidale
        var oscillateur = audioContext.createOscillator();
        //le gain servira au volume  
        var noeudGain = audioContext.createGain();
      
        //Connection aux speakers
        //La methode connect permet de lier les différents noeuds (étapes du son (effets, gain, etc..))dans l'ordre d'écriture 
        oscillateur.connect(noeudGain);    
        noeudGain.connect(audioContext.destination);
            switch(event.keyCode){
                case 65: 
                console.log("DO");
                oscillateur.type='sine';//Definini l'oscillateur comme fonctionnant grace a une sinusoïdale !
                oscillateur.frequency.value = 261,63;
                oscillateur.start();
                break;
                case 90: 
                console.log("RE");
                oscillateur.type='sine';
                oscillateur.frequency.value = 293,66;
                oscillateur.start();
                 break;
                case 69: console.log("MI"); 
                oscillateur.type='sine';
                oscillateur.frequency.value = 329,63;
                oscillateur.start();
                break;
                case 82: console.log("FA"); 
                oscillateur.type='sine';
                oscillateur.frequency.value = 349,23;
                oscillateur.start();
                break;
                case 84: console.log("SOL");
                oscillateur.type='sine';
                oscillateur.frequency.value = 392,00;
                oscillateur.start();
                 break;
                case 89: console.log("LA");
                oscillateur.type='sine';
                oscillateur.frequency.value = 440,00;
                oscillateur.start();
                 break;
                case 85: console.log("SI"); 
                oscillateur.type='sine';
                oscillateur.frequency.value = 493,88;
                oscillateur.start();
                break;
            }
        }, false)
    }

    function drawPiano(){
        ctx.save();

        ctx.translate(0,0);
        
        ctx.fillStyle = "lightGrey";
        ctx.fillRect(0, 0, 60, 300);

        ctx.restore();
    }