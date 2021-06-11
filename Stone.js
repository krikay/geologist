class Stone {
    constructor(x, y) {
      var options = {
        'density':30,
        'friction': 6.0,
        'restitution':0.4
      };
      this.body = Bodies.rectangle(x, y, 50, 50, options);
      this.x=x;
      this.y=y;
      this.width = 110;
      this.height = 50;
      World.add(world, this.body);
    };
    display(){
        var stonepos=this.body.position;
    
  
      push();
      
      strokeWeight(3);
      stroke('red')
      fill('black')
      
      rect(this.x, this.y, this.width, this.height);
      pop();
    };
  };