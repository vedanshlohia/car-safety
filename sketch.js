var car1, car2, car3;

var wall;

function setup() {
  createCanvas(1600,800);
 
  wall = createSprite(1400,400,60,700);

  car1 =  createSprite(200, 150, 25, 25);
  car1.weight = 2260;
  car1.speed = car1.velocityX = 60;

 car2 = createSprite(200, 300, 25, 25);
 car2.weight = 1522;
 car2.speed = car2.velocityX = 50;

 car3 = createSprite(200, 450, 25, 25);
 car3.weight = 3000;
 car3.speed = car3.velocityX = 45;
}

function draw() {
  background(255,255,255);

  var deformation = 0.5 * 60 * 60 * 2260 / 22500 
  var deformation2 = 0.5 * 50 * 50 * 1522 / 22500
  var deformation3 = 0.5 * 45 * 45 * 3000 / 22500
  
  if( wall.x - car1.x < car1.width/2 + wall.width/2 && deformation > 180){
    car1.shapeColor = "red";
    car1.speed = car1.velocityX = 0;
  }

  if( wall.x - car2.x < car2.width/2 + wall.width/2 && deformation2 < 90){
      car2.shapeColor = "green";
      car2.speed = car2.velocityX = 0;
    }

    if( wall.x - car3.x < car3.width/2 + wall.width/2 && deformation3 < 180){
      car3.shapeColor = "yellow";
      car3.speed = car3.velocityX = 0;
    }


  drawSprites();
}