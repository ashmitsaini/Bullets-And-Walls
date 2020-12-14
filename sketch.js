var bullet, wall;
var speed, weight;
var touching, damage;
var thickness;

function setup() {
  createCanvas(1600,400);
  bullet=createSprite(50,200,50,50);
  wall=createSprite(1200,200,thickness, height/2);
  wall.shapeColor = (80,80,80);
  speed=random(223,321);
  weight=random(30,52);
  thickness=random(22,83);

  bullet.velocityX = speed;
}

function draw() {
  background(255,255,255);

  if(isTouching(bullet,wall)){
    bullet.velocityX = 0;
    touching = 'true';
  }
  else{
    touching = 'false';
  }

  if(touching==='true'){
    damage = ((0.5*weight*speed*speed)/(thickness*thickness*thickness));

    if(damage > 10){
      bullet.shapeColor = color(255, 0, 0);
    }
    else{
      bullet.shapeColor = color(0, 255, 0);
    }
  }

  drawSprites();
}