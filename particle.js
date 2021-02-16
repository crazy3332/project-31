class particle{
    constructor(x,y,radius){
        var options = {
            restitution:0.4
        }
        this.radius = radius;

        this.body = Bodies.circle(x,y,this.radius,options);
        this.color = rgb(random(0,255),random(0,255),random(0,255));
        World.add(world,this.body);        
    }
    display(){
        var pos = this.body.position;
     
        var color = this.color
       push();
        translate(pos.x,pos.y);
         noStroke();
        fill(color)
        ellipseMode(RADIUS);
        ellipse(0,0,this.radius,this.radius);
        pop();
    }
}