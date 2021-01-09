class Box{
    constructor(x,y,width,height){
        var options={
            isStatic:true
        }
       this.body=Bodies.rectangle(x,y,600,10,options)
       this.width=200
       this.height=30
       World.add(world,this.body)
    }

    display(){
      var pos=this.body.position
     

      push();
      translate(pos.x,pos.y)
      rectMode(CENTER);
      fill("blue")
      rect(pos.x,pos.y,this.width,this.height)
      pop();
     

    }
}
