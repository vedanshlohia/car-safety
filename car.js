class Car {
   constructor(weight, speed){
     this.x = 50;
     this.y = 200;
     this.sprite = createSprite(this.x, this.y, 50,50);
     this.speed = speed;
     this.weight = weight;
     this.sprite.velocityX = this.speed;
     this.sprite.shapeColor = color(255);
    this.weight.range(400,1500);
    this.speed.range(30,90);

   }
}