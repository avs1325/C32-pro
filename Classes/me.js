class Me extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/me.png");
  }

  display() {
    imageMode(CENTER);
    image(this.image, this.body.position.x, this.body.position.y, 100, 150);
  }
}
