window.onload = init; 
let canvas, ctx;

    function init(){
        console.log("PAGE CHARGéE");

        canvas = document.querySelector("#CanvasPiano");

        ctx = canvas.getContext("2d");

        drawPiano();
        InputTouche();
    }    

    function InputTouche(){
        window.addEventListener('keydown', function(event){
            switch(event.keyCode){
                case 65: console.log("DO"); break;
                case 90: console.log("RE"); break;
                case 69: console.log("MI"); break;
                case 82: console.log("FA"); break;
                case 84: console.log("SOL"); break;
                case 89: console.log("LA"); break;
                case 85: console.log("SI"); break;
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