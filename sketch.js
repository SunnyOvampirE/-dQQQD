const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;

var particles = [];
var plinkos = [];
var divisions = [];

var divisionsHeight= 300;


function setup() {
  createCanvas(480,800);
  createSprite(240, 400, 460, 780);


  
  ground = new Ground(240,790,width,10);

  for (var j = 0; j<= width; j = j+50)
  {
    plinkos.push(new Plinko(j,75));
  }
  for (var j = 15; j <= width-10; j=j+50)
  {
    plinkos.push(new Plinkos(j,175))
  }
  for (var j = 0; j<= width; j = j+50)
  {
    plinkos.push(new Plinko(j,275));
  }
  for (var j = 15; j <= width-10; j=j+50)
  {
    plinkos.push(new Plinkos(j,375))
  }
  for (var k = 0; k<= width; k = k + 80)
  {
    divisions.push(new Divisions(k,height-divisionsHeight/2, 10, divisionsHeight));
  }
  if(frameCount%60===0)
  {
    particles.push(new Particles(random(width/2-10,width/2+10), 10,10));
  }

}

function draw() {
  background("red");  
  drawSprites();
  ground.display();
  for (var k = 0; k< divisions.length; k++){
    divisions[k].display()
  }
  for (var j = 0; j< particles.length; j++){
    particles[j].display();
  }
  for (var j = 0; j< plinkos.length; j++){
    plinkos[j].display();
  }
}