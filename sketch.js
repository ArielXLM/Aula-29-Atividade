const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

let engine;
let world;
var ground;
var fruit, rope;
var fruit_con;

function setup() 
{
  createCanvas(500,700);
  frameRate(80);
  engine = Engine.create();
  world = engine.world;
  //cria o chão
  ground = new Ground(200,680,600,20);
  //cria uma nova corda com 7 segmentos com a posição x/y
  rope = new Rope(10,{x:245,y:30});
  //cria a "bola" 
  fruit = Bodies.circle(300,300,20);
  //adiciona fisica usando o matter.js
  Matter.Composite.add(rope.body,fruit);
  //cria um link entre a corda e a bola
  fruit_con = new Link(rope,fruit);





  rectMode(CENTER);
  ellipseMode(RADIUS);
  textSize(50)
  
}

function draw() 
{
  background(51);
  rope.show();

  ellipse(fruit.position.x,fruit.position.y,30,30);
  
  Engine.update(engine);
  
  ground.show();
 
   
}
