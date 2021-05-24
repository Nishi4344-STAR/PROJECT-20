var bullet,wall;
var speed,weight,thickness;
function setup() {
  createCanvas(1360,500);
  speed= random(223,321);
  weight=random(30,52);
  thickness=random(22,83);
  wall = createSprite(1334,200, thickness,height/2);
  bullet = createSprite(400, 200, 80, 30);
}

function draw() {
  background(0); 
  bullet.velocityX=speed;
  bullet.shapeColor=color("white");
  if(hasCollided(bullet,wall)){
    
    var damage=0.5*weight*speed*speed/(thickness*thickness*thickness);


    if(damage>10){
      wall.shapeColor=color(255,0,0);
    }

    else if(damage<10){
      wall.shapeColor=color(0,255,0);
    }
    bullet.velocityX= 0;
  }


  drawSprites();
}

function hasCollided(Lbullet,Lwall){
  var bulletRightEdge=Lbullet.x+Lbullet.width;
  var  wallLeftEdge=Lwall.x;
if (bulletRightEdge>=wallLeftEdge) {
  return true

} else  return false 

 } 

