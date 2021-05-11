var fixedRect,fixedRect1, movingRect;

function setup() {
  createCanvas(800, 400);
  fixedRect = createSprite(200, 200, 50, 80);
  fixedRect.shapeColor = "green";
 // fixedRect.velocityX = 2;

  fixedRect1 = createSprite(400, 100, 50, 80);
  fixedRect1.shapeColor = "blue";
  fixedRect1.velocityY = 2;

  movingRect = createSprite(400, 300, 80, 30);
  movingRect.shapeColor = "green";
movingRect.velocityY=-2;
}

function draw() {
  background("black");
bounceOff(movingRect,fixedRect1);

/*  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;
  
if(isTouching(movingRect,fixedRect1))
 {
   movingRect.shapeColor = "red";
    fixedRect1.shapeColor = "red";
 }
 else if(isTouching(movingRect,fixedRect))
 {
   movingRect.shapeColor = "red";
    fixedRect.shapeColor = "red";
 } 
 else
 {
  movingRect.shapeColor = "green";
  fixedRect.shapeColor = "green";
  fixedRect1.shapeColor = "green";
 }*/
  drawSprites();
}

function isTouching(a,b)
{
  if (a.x - b.x < b.width / 2 + a.width / 2
    && b.x - a.x < b.width / 2 + a.width / 2
    &&a.y - b.y < b.height / 2 + a.height / 2
    && b.y - a.y < b.height / 2 + a.height / 2) 
    {
      return true;
  }
  else {
   return false;
  }
}

function bounceOff(a,b){
  if (a.x - b.x < b.width / 2 + a.width / 2
    && b.x - a.x < b.width / 2 + a.width / 2){
    a.velocityX = a.velocityX *(-1);
    b.velocityX = b.velocityX *(-1);

    }
if (a.y - b.y < b.height / 2 + a.height / 2
  && b.y - a.y < b.height / 2 + a.height / 2) {
    a.velocityY = a.velocityY *(-1);
    b.velocityY = b.velocityY *(-1);
  }

}
