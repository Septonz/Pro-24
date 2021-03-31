const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer;


function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,height,1200,20)
    hammer = new Hammer(10,100);
    stone = new Stone(350,100,100,100);
    stone2 = new Stone(450,100,100,100);
    stone3 = new Stone(250,100,100,100);
    iron = new Iron(250,100);
    ironq = new Iron(150,100);
    rubber = new Rubber(300,100,40);
  


}

function draw(){
    background("lightBlue");
    Engine.update(engine);


    plane.display();
    stone.display();
    stone2.display();
    stone3.display();
    rubber.display();
    hammer.display();
    iron.display();
    ironq.display();

 
}