class Iron {
    constructor(x, y) {
      var options = {
        'density':40,
        'friction': 7.0,
        'restitution':0.8
      };
      this.body = Bodies.rectangle(x, y, 50, 50, options);
      this.x=x;
      this.y=y;
      this.width = 150;
      this.height = 40;
      World.add(world, this.body);
    };
    display(){
        var ironpos=this.body.position;
    
  
      push();

      strokeWeight(3);
      stroke('black')
      fill('yellow')
      
      rect(this.x, this.y, this.width, this.height);
      pop();
    };
  };