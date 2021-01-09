
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var box1,bob1

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
      box1=new Box(50,20)
      bob1=new Bob(50,200)
	  
	 
	  var options={
		  bodyA:box1.body,
		  bodyB:bob1.body,
		  stiffness:0.04,
		  length:20
	  }
	 var chain=Constraint.create(options)
	  World.add(world,chain)

	  Engine.run(engine);

}


function draw() {
  
  background(220);
  
  box1.display();
  bob1.display();
  
 strokeWeight(6)
 line(box1.body.position.x, box1.body.position.y, bob1.body.position.x, bob1.body.position.y)

 
}




