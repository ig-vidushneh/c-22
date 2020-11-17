const Engine1=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var myengine,world;
var ground,ball;

function setup() 
{
  createCanvas(400,400);
  myengine=Engine1.create();
  world=myengine.world;

  ground=Bodies.rectangle(200,380,800,50,{isStatic:true});

  ball=Bodies.circle(200,100,10,{restitution:0.9})
  World.add(world,ground);
  World.add(world,ball);
}

function draw() 
{
  background(0); 
Engine1.update(myengine);
rectMode(CENTER);
fill("brown")
rect(ground.position.x,ground.position.y,400,50);
fill("pink")
circle(ball.position.x,ball.position.y,50);
}