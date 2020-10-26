var car,wall;
var speed = 10,weight = 200;
function setup() {
  createCanvas(1600,400);
car = createSprite(50,200,50,50);
wall = createSprite(1500,200,60,height/2)
car.velocityX = speed;
}

function draw() {
  background(255,255,255);
  if(wall.x-car.x= wall.width/2+car.width/2){
    car.velocityX = -10
    car.weight = car.weight-60
  }
  if(car.weight>180){
    car.shapeColor = "red"
  }
  if(car.weight<180&&car.weight>100){
    car.shapeColor = "yellow"
  }
  if(car.weight<100){
    car.shapeColor = "green"
  }
  

  drawSprites();
}