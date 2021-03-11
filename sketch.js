const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint=Matter.Constraint
var engine, world;
var box1, pig1,ball;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
  
    
    ground = new Ground(600,height,1200,20)
  
    box1 = new Box(700,350,50,50);
    box2 = new Box(700,300,50,50);
   

    box3 = new Box(700,250,50,50);
    box4 = new Box(700,200,50,50);
    

    box5 = new Box(700,150,50,50);
  

    ball= new Ball(200,200,50,50);
    rope=new rope(ball.body,{x:500,y:50});
}

function draw(){
    background(0);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    box2.display();
    ground.display();
    rope.display();
   
    box3.display();
    box4.display();
    
    ball.display();
    box5.display();
  

    
}
 function mouseDragged(){
Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY});
}