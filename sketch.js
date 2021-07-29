var road,Jaxon, leftBoundary,rightBoundary;
var roadImg,JaxonImg;
var i;

function preload(){
  roadImg = loadImage("path.png");
  JaxonImg = loadAnimation("jake1.png","jake2.png","jake3.png","jake4.PNG","jake5.png");
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
road=createSprite(200,200);
road.addImage(roadImg);
road.velocityY = 4;
road.scale=1.2;

//creating boy running
Jaxon = createSprite(180,340,30,30);
Jaxon.addAnimation("JakeRunning",JaxonImg);
  
// create left Boundary
leftBoundary=createSprite(0,0,100,800);
leftBoundary.visible = false;

//create right Boundary
rightBoundary=createSprite(410,0,100,800);
rightBoundary.visible = false;
}

function draw() {
  background(0);
  road.velocityY = 4;
  
  // boy moving on Xaxis with mouse
  Jaxon.x = World.mouseX;
  
  edges= createEdgeSprites();
  Jaxon.collide(edges[3]);
  Jaxon.collide(leftBoundary);
  Jaxon.collide(rightBoundary);
  
  //code to reset the background
  if(road.y > 400 ){
    road.y = height/2;
  }
  
  drawSprites();
}