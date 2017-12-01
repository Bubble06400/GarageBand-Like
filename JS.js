window.onload = init; 
let canvas, ctx;

    function init(){
        console.log("PAGE CHARGéE");

        canvas = document.querySelector("#CanvasPiano");

        ctx = canvas.getContext("2d");

        drawPiano();
    }    

    function drawPiano(){
        ctx.save();

        ctx.translate(0,0);
        
        ctx.fillStyle = "lightGrey";
        ctx.fillRect(0, 0, 60, 300);

        ctx.restore();
    }