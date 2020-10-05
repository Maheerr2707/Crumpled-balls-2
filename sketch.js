var ground,paper
var box1,box2,box3

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload(){}

function setup() {
	createCanvas(800, 700);


 engine = Engine.create();
  world = engine.world;

  ground = new Ground(400,400,800,60);
  paper = new Paper(100,100,20);

box1 = new Box(600,365,100,10);
box2 = new Box(550,330,10,50);
box3 = new Box(650,330,10,50);

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  background(255,255,255);  
  drawSprites();

  Engine.update(engine);

  rectMode(CENTER);  
  drawSprites();

  ground.display();	
  paper.display();
  box1.display();
  box2.display();
  box3.display();	
 
}

function keyPressed(){
  if(keyCode === UP_ARROW){
    Matter.Body.applyForce( paper.body,paper.body.position,{x:85,y:-85});
  }
}



