
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;

var roof;
var bob1,bob2,bob3,bob4,bob5;
var bobdiameter;
var rope1,rope2,rope3,rope4,rope5;
function setup() {
	createCanvas(1600, 700);
	engine = Engine.create();
	world = engine.world;
bobdiameter=40;
roof=new ground(800,25,1600,20);
bob1 = new bob(720,200,bobdiameter);
bob2 = new bob(740,200,bobdiameter);
bob3 = new bob(800,200,bobdiameter);
bob4 = new bob(840,200,bobdiameter);
bob5 = new bob(880,200,bobdiameter);


rope1=new chain(bob1.body,roof.body,-bobdiameter*2,0);
rope2=new chain(bob2.body,roof.body,-bobdiameter*1,0);
rope3=new chain(bob3.body,roof.body,0,0);
rope4=new chain(bob4.body,roof.body,bobdiameter*1,0);
rope5=new chain(bob5.body,roof.body,bobdiameter*2,0);

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  roof.display();
  bob1.display();
  bob2.display();
 bob3.display();
 bob4.display();
 bob5.display();
 rope1.display();
 rope2.display();
 rope3.display();
 rope4.display();
 rope5.display();
 drawSprites();
}

function keyPressed(){
  if(keyCode === UP_ARROW){
    Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-50,y:-45})
  }
}

