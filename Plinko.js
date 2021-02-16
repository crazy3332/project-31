class Plinko {
    constructor(x,y,radius) {
      var options = {
          isStatic: true
      }
      this.body = Bodies.circle(x, y,radius, options);
      this.radius = radius
      
      World.add(world, this.body);
    }

    display(){
     
      fill("white")   
      var pos =this.body.position;
         circle(pos.x,pos.y,this.radius*2);
         

    }
  }