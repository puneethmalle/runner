var runner,runner1;
var path,pathimg;
var edges,leftBoundary,rightBoundary;
function preload(){
  runner1 = loadAnimation("Runner-1.png","Runner-2.png");
  pathimg = loadImage("path.png");
}

function setup(){
  createCanvas(400,400);
  path = createSprite(200,200);
  path.addImage(pathimg);
  path.velocityY =4;



  runner = createSprite(180,340,30,30);
  runner.addAnimation("jakeRunning",runner1);
  runner.scale=0.08;


  leftBoundary=createSprite(0,0,100,800);
leftBoundary.visible = false;

//create right Boundary
rightBoundary=createSprite(410,0,100,800);
rightBoundary.visible = false;
}
  


function draw() {
  background(180);
  runner.x = World.mouseX;


  path.velocityY = 4;
  
  edges= createEdgeSprites();
 runner.collide(edges[3]);
  runner.collide(leftBoundary);
  runner.collide(rightBoundary);

  if(path.y>400){
    path.y = height/2;
  }
  
  drawSprites();
}
