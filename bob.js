class Bob{
    constructor(x,y,radius)
    {
        var options={
           'isStatic': true,
           'restitution' : 0.8,
           'friction' : 0.3,
           'density': 1.0
         }

    this.body=Bodies.circle(50,200,50,options)
    this.radius=50
    World.add(world,this.body)
    }

    display(){
        var pos=this.body.position
         
        
        
        push();
        translate(pos.x,pos.y)
        ellipseMode(CENTER)
        strokeWeight(9)
        stroke("green")
        fill("violet")
        circle(pos.x,pos.y,this.radius)
        pop();
    }
}