class Block{
    constructor(x,y){
        this.x=x;
        this.y=y;
        this.body=Bodies.rectangle(this.x,this.y,20,20);
        this.width=20;
        this.height=20;
        World.add(world,this.body)
    }
    display(){
        var pos=this.body.position
        push()
        //fill(random(0,255),0,random(0,255))
        rectMode(CENTER)
        rect(pos.x,pos.y,this.width,this.height);
        pop()
    }
}