
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper, ground, dustbin1, dustbin2, dustbin3;

function preload() {

}

function setup() {
	createCanvas(1200, 600);




	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	paper = new Paper(210, 340, 50);
	ground = new Ground(650, 590, 1500, 20);
	dustbin1 = new Dustbin(900, 570, 225, 20);
	dustbin2 = new Dustbin(783, 470, 20, 220);
	dustbin3 = new Dustbin(1020, 470, 20, 220);



	Engine.run(engine);

}


function draw() {
	Engine.update(engine);
	background(0);

	paper.display();
	
	ground.display();
	
	dustbin1.display();
	dustbin2.display();
	dustbin3.display();



	drawSprites();

}

function keyPressed(){
	if (keyCode===UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:40,y:-40});
	}
}



