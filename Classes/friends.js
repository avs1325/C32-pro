class Friends extends BaseClass {
   
  constructor(x, y){

      super(x,y,50,50);
      this.image = loadImage("sprites/friends.png");
      this.Visiblity = 255;
      this.x = x;
      this.y = y;
  }

  display(){
    
    if(this.body.speed < 3){
      imageMode(CENTER);
      image(this.image, this.body.position.x, this.body.position.y, 200, 200);
    }
    else{
      World.remove(world, this.body);
      push();
      this.Visiblity = this.Visiblity - 5;
      tint(255,this.Visiblity);
      image(this.image, this.body.position.x, this.body.position.y, 200, 200);
      pop();
    }
    }
    score(){
      if (this.Visiblity < 0 && this.Visiblity > -1005){
        score = score + 3;
      }
  }
}