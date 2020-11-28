const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var particles =[];
var balls = [];
var divisions = [];
var divisionHeight=300;


function setup() {
  createCanvas(480, 800 );
  engine = Engine.create();
  world = engine.world;


  ground= new Ground(0,800,1000,20);


  //check the error on line number 24, you have to give - sign instead of * after height

  /*for(var k=0;k<=width;k=k + 80){
    divisions.push(new Block(k,height*divisionHeight/2,10,divisionHeight))
      }*/
      for (var k = 0; k <=width; k = k + 80) {
        divisions.push(new Block(k, height-divisionHeight/2, 10, divisionHeight));
      }
/*divisions1 = new Block(0,700,10,200);
divisions2 = new Block(60,700,10,200);
divisions3 = new Block(120,700,10,200);
divisions4 = new Block(180,700,10,200);
divisions5= new Block(240,700,10,200);
divisions6 = new Block(300,700,10,200);
divisions7 = new Block(360,700,10,200);
divisions8 = new Block(420,700,10,200);
divisions9 = new Block(480,700,10,200);*/
  ball1= new Ball(400,200,20);
  ball2= new Ball(450,100,20);
  ball3= new Ball(450,300,20);
  ball4= new Ball(400,400,20);
  ball5= new Ball(450,500,20);
  ball6= new Ball(350,100,20);
  ball7= new Ball(300,200,20);
  ball8= new Ball(350,300,20);
  ball9= new Ball(300,400,20);
  ball10= new Ball(350,500,20);
  ball11= new Ball(250,100,20);
  ball12= new Ball(200,200,20);
  ball13= new Ball(250,300,20);
  ball14= new Ball(200,400,20);
  ball15= new Ball(250,500,20);
  ball16= new Ball(150,100,20);
  ball17= new Ball(100,200,20);
  ball18= new Ball(150,300,20);
  ball19= new Ball(100,400,20);
  ball20= new Ball(150,500,20);
  ball21= new Ball(50,100,20);
  ball22= new Ball(0,200,20);
  ball23= new Ball(50,300,20);
  ball24= new Ball(0,400,20);
  ball25= new Ball(50,500,20);
  


}

function draw() {
  Engine.update(engine);
  background("black"); 

  if(frameCount%60===0){
    particles.push(new Particles(random(width/2-10,width/2+10),10,10))
      }
      for(var j=0;j<particles.length;j++){

     particles[j].display() ;
      }

     for(var k=0;k<divisions.length;k++){

     divisions[k].display() ;
      }


    
ground.display();
/*divisions1.display();
divisions2.display();
divisions3.display();
divisions4.display();
divisions5.display();
divisions6.display();
divisions7.display();
divisions8.display();
divisions9.display();*/
 ball1.display();
 ball2.display();
 ball3.display();
 ball4.display();
 ball5.display();
 ball6.display();
 ball7.display();
 ball8.display();
 ball9.display();
 ball10.display();
 ball11.display();
 ball12.display();
 ball13.display();
 ball14.display();
 ball15.display();
 ball16.display();
 ball17.display();
 ball18.display();
 ball19.display();
 ball20.display();
 ball21.display();
 ball22.display();
 ball23.display();
 ball24.display();
 ball25.display();


  drawSprites();

}


