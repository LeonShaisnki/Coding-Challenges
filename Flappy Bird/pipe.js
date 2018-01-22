function Pipe() {

  this.top = random(height/2);
  this.bottom = random(height/2);
  this.x = width;
  this.w=20;

  this.show = function )_ {
    fill(255);
    rect(this.x, 0, this.x, this.top);
    rect(this.x, height-this.bottom, this.w, this.bottom);

  }

  this.update = function() {
    this.x -=this.speed;

  }

}
