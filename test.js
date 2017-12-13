var audio_context = window.AudioContext || window.webkitAudioContext;
var con = new audio_context();
var osc = con.createOscillator();
osc.connect(con.destination);
osc.frequency.value = 0;
osc.start();
var inputStates = {};

if (inputStates.a) {console.log("a");osc.frequency.value = 261.63;}
	if (inputStates.z) {osc.frequency.value = 293.66;}
	if (inputStates.e) {osc.frequency.value = 329.63;}
	if (inputStates.r) {osc.frequency.value = 349.23;}
	if (inputStates.t) {osc.frequency.value = 392.00;}
	
window.addEventListener('keydown', function(event){
      if (event.keyCode === 65) {
        inputStates.a = true;
      } else if (event.keyCode === 90) {
        inputStates.z = true;
      } else if (event.keyCode === 69) {
        inputStates.e = true;
      } else if (event.keyCode === 82) {
        inputStates.r = true;
      } else if (event.keyCode === 84) {
        inputStates.t = true;
      }
    }, false);

window.addEventListener('keyup', function(event){
      if (event.keyCode === 65) {
        inputStates.a = false;
      } else if (event.keyCode === 90) {
        inputStates.z = false;
      } else if (event.keyCode === 69) {
        inputStates.e = false;
      } else if (event.keyCode === 82) {
        inputStates.r = false;
      } else if (event.keyCode === 84) {
        inputStates.t = false;
      }
    }, false);

	