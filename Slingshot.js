class SlingShot {
    constructor(bodyA,pointB){
      var option = {
          stiffness : 0.04,
          length : 20,
          bodyA : bodyA,
          pointB : pointB
      }
      this.pointB=pointB
      this.sling = Matter.Constraint.create(option)
      World.add(world,this.sling)
    }
    display(){
        if (this.sling.bodyA){ 

        
        var pointA = this.sling.bodyA.position;
        var pointB = this.pointB;
        strokeWeight(4);

        line(pointA.x,pointA.y,pointB.x,pointB.y);
    }
}
    fly(){
     this.sling.bodyA=null;
    }
}
