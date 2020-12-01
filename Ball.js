class Ball{
    constructor(x,y,radius){

        var options={
           friction:0.2,density:0.7,restitution:0.5,
        }

        this.body=Bodies.circle(x,y,radius,options);
        World.add(world,this.body);

        this.radius=radius;

    }



    display(){

            var pos=this.body.position;
            var angle= this.body.angle;
            push();
            fill("grey")
            translate(pos.x,pos.y)
            rotate(angle);
            ellipseMode(RADIUS);
            ellipse(0,0,this.radius,this.radius);
            pop();
    }

}