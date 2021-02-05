class Slingshot{
    constructor(bodyA,pntB){
        var options={
            bodyA:bodyA,
            pointB:pntB,
            stiffness:0.04,
            length:1.9
            
        }
        this.pointB=pntB;
        console.log(pntB)
        this.sling=Constraint.create(options);
        World.add(world,this.sling);
        console.log(this.sling)
    }
    fly(){
        this.sling.bodyA=null;
    }
    display(){
        if(this.sling.bodyA){
            var pointA=this.sling.bodyA.position;
            var pointB=this.pointB;
            strokeWeight(4);
            stroke("red");
            line(pointA.x,pointA.y,pointB.x,pointB.y);
        }
    }
}