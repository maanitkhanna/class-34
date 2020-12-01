class Box{
    constructor(x,y,width,height,color){

        var options={
           friction:1.0,density:0.7,restitution:0.5,
        }

        this.body=Bodies.rectangle(x,y,width,height,options);
        World.add(world,this.body);
        this.color=color;
        this.width=width;
        this.height=height;

    }



    display(){

            var pos=this.body.position;
            var angle= this.body.angle;
            push();
            translate(pos.x,pos.y)
            rotate(angle);
            rectMode(CENTER);
            fill(this.color);
            rect(0,0,this.width,this.height);
            pop();
    }

}