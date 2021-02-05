const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
const Constraint=Matter.Constraint;


var engine,world

var g1,g2;
var polyImg
function preload(){
     polyImg=loadImage("polygon.png")
 }
function setup(){
    createCanvas(600,600)

    engine=Engine.create();
    world=engine.world;

   // box=Bodies.rectangle(200,20,20,20)
   // World.add(world,box)

    g1=new Ground(300,300,180,15);

    b1=new Block(250,130)
    b2=new Block(270,130)
    b3=new Block(290,130)
    b4=new Block(310,130)
    b5=new Block(330,130)
    b6=new Block(350,130)


    b7=new Block(260,100);
    b8=new Block(280,100);
    b9=new Block(300,100);
    b10=new Block(320,100);
    b11=new Block(340,100);

    b12=new Block(270,80);
    b13=new Block(290,80);
    b14=new Block(310,80);
    b15=new Block(330,80)


    b16=new Block(280,90);
    b17=new Block(300,90);
    b18=new Block(320,90);

    b19=new Block(300,50);

    polygon=Bodies.circle(40,300,20);
    World.add(world,polygon);
    console.log("Polygon="+ polygon)
    slingShot=new Slingshot(polygon,{x:90,y:190})
}
function draw(){
    background("cyan")
    textSize(30);
    text("Tower Seige1",200,50)
     Engine.update(engine);
//rectMode(CENTER);
    // rect(box.position.x,box.position.y,20,20);
     g1.display();
     b1.display();
     b2.display();
     b3.display();
     b4.display();
     b5.display();
     b6.display();
     b7.display();
     b8.display();
     b9.display();
     b10.display();
     b11.display();
     b12.display();
     b13.display();
     b14.display();
     b15.display();
     b16.display();
    b17.display();
     b18.display();
     b19.display();
     imageMode(CENTER);
    image(polyImg,polygon.position.x,polygon.position.y,40,40);
    slingShot.display();
}

function mouseDragged(){
    Matter.Body.setPosition(polygon,{x:mouseX,y:mouseY});

}
function mouseReleased(){
    slingShot.fly();
}
