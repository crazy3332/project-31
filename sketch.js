const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var particles = [];
var plinkos = [];
var plinkos2 = [];
var plinkos3 = [];
var plinkos4 = [];
var divisions = [];
var divisionHeight = 300;
function setup() {
   createCanvas(480,800);
   engine = Engine.create();
   world = engine.world;
   ground1 = new Ground(240,775,width,50);
   
}

function draw() {
   Engine.update(engine)
   background(0); 
   
   var i = 0;
   for(var k = 0; k<=width; k = k+80){
      divisions.push(new Division(k,height-divisionHeight/2,10,divisionHeight));
      divisions[i].display();
      i = i +1;
   }
   var h = 0;
   for(var m = 0; m<=width; m = m+60){
      plinkos.push(new Plinko(m,75,10));
      plinkos[h].display();
      h = h +1;
   }
   var a = 0;
   for(var b = 30; b<=width; b = b+60){
      plinkos2.push(new Plinko(b,175,10));
      plinkos2[a].display();
      a = a +1;
   }
   var c = 0;
   for(var d = 0; d<=width; d = d+60){
      plinkos3.push(new Plinko(d,275,10));
      plinkos3[c].display();
      c = c +1;
   }
   var e = 0;
   for(var f = 30; f<=width; f = f+60){
      plinkos4.push(new Plinko(f,375,10));
      plinkos4[e].display();
      e = e +1;
   }
  
   if(frameCount%10 === 0){
      particles.push(new particle(random(200,240),10,10));
   }
   
  
   for(var g = 0;g<particles.length;g++){
      particles[g].display();
   }
  
   
   
   ground1.display();
   drawSprites();
}
