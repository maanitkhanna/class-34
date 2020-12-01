const Engine = Matter.Engine;
const World=Matter.World;
const Bodies= Matter.Bodies;
const Constraint=Matter.Constraint;
var engine,world;

function setup() {
  createCanvas(1400,600);
  engine= Engine.create();
  world=engine.world;

  ground= new Ground(width/2,height-10,width,10);

  box1= new Box(1100,550,50,70,"red");
  box2= new Box(1100,500,50,70,"red");
  box3= new Box(1100,450,50,70,"red");
  box4= new Box(1100,400,50,70,"red");
  box5= new Box(1100,350,50,70,"red");
  box6= new Box(1100,300,50,70,"red");
  box7= new Box(1100,250,50,70,"red");
  box8= new Box(1100,200,50,70,"red");

  box9= new Box(1050,550,50,70,"blue");
  box10= new Box(1050,500,50,70,"blue");
  box11= new Box(1050,450,50,70,"blue");
  box12= new Box(1050,400,50,70,"blue");
  box13= new Box(1050,350,50,70,"blue");
  box14= new Box(1050,300,50,70,"blue");
  box15= new Box(1050,250,50,70,"blue");
  box16= new Box(1050,200,50,70,"blue");

  box17= new Box(1150,550,50,70,"cyan");
  box18= new Box(1150,500,50,70,"cyan");
  box19= new Box(1150,450,50,70,"cyan");
  box20= new Box(1150,400,50,70,"cyan");
  box21= new Box(1150,350,50,70,"cyan");
  box22= new Box(1150,300,50,70,"cyan");
  box23= new Box(1150,250,50,70,"cyan");
  box24= new Box(1150,200,50,70,"cyan");

  ball= new Ball(800,100,60);
  rope= new Rope(ball.body,{x:800,y:100})


}

function draw() {
  background("lightblue");  
  Engine.update(engine);
  ground.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  box13.display();
  box14.display();
  box15.display();
  box16.display();
  box17.display();
  box18.display();
  box19.display();
  box20.display();
  box21.display();
  box22.display();
  box23.display();
  box24.display();
  ball.display();
  rope.display();

 
}

function mouseDragged(){

  Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY});

}