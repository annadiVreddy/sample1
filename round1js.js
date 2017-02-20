//Timer function to be executed.
/******************************************************************/
var pause=0;
var count=0;
var counter=setInterval(timer, 1000); 
var stoped=0;

function timer(){
  count=count+1;
  document.getElementById("timer").innerHTML=count + " secs"; 
}

function StopFunction()
{
  clearInterval(counter);
  window.count=0;
  window.pause=0;
  document.getElementById("pause").innerHTML="Pause"
  window.stoped=1
  document.getElementById("timer").innerHTML=count + " secs";
}

function ReStartFunction()
{
  if (counter)
  {
    clearInterval(counter);
    window.pause=0;
    window.count=0;
    window.stoped=0
    window.counter=setInterval(timer, 1000); 
    count=count+1;
    document.getElementById("pause").innerHTML="Pause"
    document.getElementById("timer").innerHTML=count + " secs"; 
  }
}

function PauseFunction()
{
  if (stoped==0)
  { 
    if (pause==0) 
    {
      clearInterval(counter);
      document.getElementById("pause").innerHTML="Resume"
      pause=1;
      return;
    }

  if (pause==1) 
    {
      window.counter=setInterval(timer, 1000); 
      document.getElementById("timer").innerHTML=count + " secs"; 
      document.getElementById("pause").innerHTML="Pause"
      pause=0;
      return;
    }
  }
  return;
}
/**************************************************************************/
//Pizza base function
function drawPolygon(){

	canvas = document.getElementById("myCanvas");

	if(canvas.getContext){
		

		var objctx = canvas.getContext('2d');

		objctx.beginPath();

        objctx.moveTo(110, 50);

		objctx.lineTo(90, 240);

		objctx.lineTo(400, 185);

		objctx.closePath();

		objctx.stroke();

		objctx.fillStyle = "#d9d9d9";

        objctx.fill();

 

        } else {

            alert('You need HTML5 compatible browser to see this demo.');

        }

    }
	
var mousePressed = false;
var lastX, lastY;
var ctx;

function InitThis() {
	
	ctx = document.getElementById('myCanvas').getContext("2d");

    $('#myCanvas').mousedown(function (e) {
        mousePressed = true;
        Draw(e.pageX - $(this).offset().left, e.pageY - $(this).offset().top, false);
    });

    $('#myCanvas').mousemove(function (e) {
        if (mousePressed) {
            Draw(e.pageX - $(this).offset().left, e.pageY - $(this).offset().top, true);
        }
    });

    $('#myCanvas').mouseup(function (e) {
        mousePressed = false;
    });
	    $('#myCanvas').mouseleave(function (e) {
        mousePressed = false;
    });
}

function Draw(x, y, isDown) {
    if (isDown) {
        ctx.beginPath();
        ctx.strokeStyle = $('#selColor').val();
        ctx.lineWidth = $('#selWidth').val();
        ctx.lineJoin = "round";
        ctx.moveTo(lastX, lastY);
        ctx.lineTo(x, y);
        ctx.closePath();
        ctx.stroke();
    }
    lastX = x; lastY = y;
}
	
function clearArea() {
    // Use the identity matrix while clearing the canvas
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
}

/****************************************************************/
//Oven Switched on and switch off


function ovenOn(){
    var display=document.getElementById("pizza-count");
    display.innerHTML="Pizza in the oven.";
    display.style.backgroundColor="red";
    document.getElementById("turn-off").removeAttribute("disabled");
}

function ovenOff(){
    var display=document.getElementById("pizza-count");
    display.innerHTML="Pizza is baked, You can add pizza to the oven.";
    display.style.backgroundColor="green";
     var value = parseInt(document.getElementById('delivery-count').value, 10);
    value = isNaN(value) ? 0 : value;
    value++;
    document.getElementById('delivery-count').value = value;
}
/**********************************************************************/
//Delivery count to be increased every time the pizza is baked.
