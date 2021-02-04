class Papper {
    constructor(x, y) {
      var options = {
        'density':1.5,
        'friction': 1.0,
        'restitution':0.5
        
      };
      this.body = Bodies.circle(x, y, 15,options);
      this.image=loadImage("paper.png")
      World.add(world, this.body);
    };
    display(){
     
  
     
      
      
      var pos =this.body.position;
    var angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    ellipse(CENTER);
    fill(228,35,157);
    ellipse(100,45,35);
    pop();
     
    };
  };