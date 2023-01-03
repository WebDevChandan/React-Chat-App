var display 	= document.getElementById('myCanvas');
var ctx = display.getContext("2d");

// ParalleloGram
ctx.moveTo(0,0);
ctx.lineTo(100,100);
ctx.stroke();
ctx.lineTo(200,100);
ctx.lineTo(110,0);
ctx.stroke();

// Circle
ctx.beginPath();
ctx.arc(100,100,40,0,2*Math.PI);
ctx.fill();
ctx.stroke();

// Draw a Text
ctx.font="50px Arial";
ctx.strokeText("Chandan", 250, 250);