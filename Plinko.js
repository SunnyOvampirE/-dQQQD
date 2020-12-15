class Plinko {

    constructor(x,y,radius){
        var options={
            'isStatic':true,
            'restitution':0.3,
            'friction':0.5,
            'density':1.2
        }
        this.x=x;
        this.y=y;        
        this.radius = 10;
        this.body = Bodies.circle(x,y,10/2,options);
  
        World.add(world, this.body)
    }
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        rectMode(CENTER);

        fill("yellow");
        ellipse(0,0,this.radius,this.radius);
        pop();
    }
};