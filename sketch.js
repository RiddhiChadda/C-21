var movingRect , fixedRect ;
var box1 ,  box2 , box3  

function setup() {
  createCanvas(800,400);
  movingRect = createSprite (200,300,50,50) ;
  fixedRect = createSprite ( 400,200,100,50) ;
  movingRect.shapeColor = "green" ;
  fixedRect.shapeColor = "green " ; 

box1 = createSprite ( 100, 100, 20,20 ) ; 
box1.shapeColor = "blue" ; 
box2 = createSprite ( 200, 150, 20 ,20 ) ; 
box2.shapeColor = "blue" ; 
box3 = createSprite ( 400,300, 20, 20 ) ; 
box3.shapeColor = "blue" ; 

movingRect.velocityY = -5;
fixedRect.velocityY = +5;

}

function draw() {
  background(0);  

movingRect.x = mouseX ;
movingRect.y = mouseY ; 


bounceOff(movingRect , fixedRect) ; 



  drawSprites();
}
















