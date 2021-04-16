var fixed ;
var move ;
function setup() {
  createCanvas(800,400);
  fixed=createSprite(400, 200, 50, 50);
  move=createSprite(400,100,40,40);
  move.velocityY=4;
}

function draw() {
  background(255,255,255);  
  if (move.x-fixed.x<fixed.width/2+move.width/2&&
    fixed.x-move.x<fixed.width/2+move.width/2&&
    fixed.y-move.y<fixed.height/2+move.height/2&&
    move.y-fixed.y<fixed.height/2+move.height/2){
    move.shapeColor="blue";
    fixed.shapeColor="red";
    move.velocityY=-4;
  } else {
    move.shapeColor="green";
    fixed.shapeColor="yellow";
  }
  drawSprites();
}