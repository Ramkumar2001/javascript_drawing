var canvas = document.querySelector('#myCanvas');
var context = canvas.getContext('2d');
console.log('HI');

  canvas.width = window.innerWidth - 200;
  canvas.height = window.innerHeight - 200;


var paint = false;
function startofpaint(e){
  paint = true;
  draw(e);
}
function endofpaint(){
  paint = false;
  context.beginPath();
}

canvas.addEventListener('mousedown', startofpaint);
canvas.addEventListener('mouseup', endofpaint);
canvas.addEventListener('mousemove', draworerase);

function draworerase(e){
  if(!paint) return;
  console.log(e);

  context.lineTo(e.clientX, e.clientY);
  context.stroke();

}

var eraser = document.querySelector('#eraser');
eraser.addEventListener('click', Erase);

var pen = document.querySelector('#pen');
pen.addEventListener('click', Pen);
function Erase(e){
  context.strokeStyle = 'white';
  context.lineWidth = 20;
}

function Pen(e){
  context.strokeStyle = 'black';
  context.lineWidth = 2;
}
