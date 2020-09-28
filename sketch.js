var tower, ghost, towerImage, ghostImage,doorImage,climberImage;
var play=1;
var end=0;
var gameState=play;
var doorGroup;
var climberGroup
function preload(){
 towerImage=loadImage("tower.png");
  ghostImage=loadImage("ghost-standing.png");
  doorImage=loadImage("door.png");
  climberImage=loadImage("climber.png");
}

function setup(){
 createCanvas(600,600);
  tower=createSprite(300,300,100,100);
  tower.addImage(towerImage);
  ghost=createSprite(200,300,50,50);
  ghost.addImage(ghostImage);
  ghost.scale=0.38;
  doorGroup=new Group();
  climberGroup=new Group();
}

function draw(){
  background("white");
  tower.velocityY=3;
  
  if(gameState===play){
   if(tower.y>600){
  tower.y=300;
  }
  if(keyDown("space")){
   ghost.velocityY=-3; 
  }
  ghost.velocityY=ghost.velocityY+0.2;
  if(keyDown("right_arrow")){
  ghost.x=ghost.x+2;
  }
  if(keyDown("left_arrow")){
    ghost.x=ghost.x-2;
  }
  spawnDoors();
    if(ghost.isTouching(doorGroup)||ghost.isTouching(climberGroup)||ghost.y>600){
  gameState=end;
  }}
  else if(gameState===end){
    background("black");
    fill("red")
    textSize(50);
    textFont("comicsans")
    text("Game Over!",200,300);
  }
  
  drawSprites();
}


function spawnDoors(){
  if(frameCount%200===0){ 
var rand1=Math.round(random(50,550));
  var door=createSprite(rand1, 0);
    door.addImage(doorImage);
   door.velocityY=3; 
    var climber=createSprite(door.x,door.y+60);
    climber.addImage(climberImage);
    climber.velocityY=3;
    doorGroup.add(door);
    climberGroup.add(climber);
  }
  
  
  
  
}