const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let number = 0; // Angle Reference
let scale = 10; // Radius Reference
let limit = 0; // Limit of Sequence

function draw(){
    let angle = number *3;
    let radius = scale * Math.sqrt(number);
    let positionX = radius * Math.sin(angle) + canvas.width/2;
    let positionY = radius * Math.cos(angle) + canvas.height/2;

    ctx.fillStyle = 'white';
    ctx.strokeStyle = 'pink';
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.arc(positionX, positionY, 20, 0, Math.PI*2);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
    
    number++;
}

function animate(){
    draw();
    if(limit< 400) {
        requestAnimationFrame(animate);
        limit++;
    } 
}
animate();