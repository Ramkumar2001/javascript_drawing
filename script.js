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


function Erase(e){
  context.strokeStyle = 'white';
  context.lineWidth = 20;
}


var colors = document.querySelectorAll('.color');
colors.forEach((color) => {
  color.addEventListener('click', ChangeColor)
});

function ChangeColor(e){
  if(e.target.id=='yellow')
  context.strokeStyle='yellow';
  if(e.target.id=='red')
  context.strokeStyle='red';
  if(e.target.id=='green')
  context.strokeStyle='green';
  if(e.target.id=='blue')
  context.strokeStyle='blue';
  if(e.target.id=='black')
  context.strokeStyle='black';

}
