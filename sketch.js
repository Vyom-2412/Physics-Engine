const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var world,engine;
var box,ground,box1;

function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;
  var options = {restitution:1.4,friction:0.3};
  box = Bodies.rectangle(400,200,70,70,options);
  World.add(world,box);
  box1 = Bodies.circle(300,200,30,options);
  World.add(world,box1);
  var options = {isStatic:true};
  ground = Bodies.rectangle(400,390,800,20,options);
  World.add(world,ground);
}

function draw() {
  background(0);
  Engine.update(engine);
  rectMode(CENTER)
  rect(box.position.x,box.position.y,70,70);
  rect(ground.position.x,ground.position.y,800,20);
  ellipse(box1.position.x,box1.position.y,30,30);
}