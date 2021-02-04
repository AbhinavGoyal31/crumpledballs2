
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;
var box1,box2,box3;
var box4,ground,PaperIMG,DustbinIMG;

function preload()
{
DustbinIMG=loadImage("dustbingreen.png")	
	
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(600,670,1200,10)
	papper = new Papper(100,100);

	box1=createSprite(550,600, 20,100);
	box2=createSprite(650,580, 200,20);
	box2.addImage(DustbinIMG);
	box2.scale=0.70
	box3=createSprite(750,600, 20,100);
	World.add(world, box1);
	World.add(world, box2);
	World.add(world, box3);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
 
 ground.display();
 
  box2.display();
  
  papper.display();
}



