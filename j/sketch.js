var bullet,wall,thickness;
var speed,weight,damage;
function setup() {
  createCanvas(1600,400);
speed = random(223,321)
weight = random(30,52)
  bullet = createSprite(50,200,50,5);
wall = createSprite(1500,200,thickness,height/2)
bullet.velocityX = speed/10;
}

function draw() {
  background(255,255,255);
  
  if(wall.x-bullet.x <= wall.width/2+bullet.width/2){
    bullet.velocityX = 0
    damage = 0.5*weight*speed*speed/thickness*thickness*thickness
    if(damage<=10){
      bullet.shapeColor = "green"
        }
        if(damage>10){
          bullet.shapeColor = "red"
        }
        
  }
  
 
  

  drawSprites();
}