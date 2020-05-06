var fixRect, moveRect;

function setup() {
  createCanvas(800,400);
  fixRect=createSprite(400, 200, 100, 50);
  moveRect=createSprite(200,200,50,100);
  fixRect.shapeColor="red";
  moveRect.shapeColor="blue";

  
}

function draw() {
  background("yellow");  
       
  moveRect.x=World.mouseX;
  moveRect.y=World.mouseY;

   if(isTouching(moveRect,fixRect)){
     moveRect.shapeColor= "black";
     fixRect.shapeColor= "green";
   }
   else{
    fixRect.shapeColor="red";
    moveRect.shapeColor="blue";   
   }

  drawSprites();
}




































































































