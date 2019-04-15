'use strict';
console.log('PLAYER CONNECTED');

function Player(canvas, color, x){
  this.lives = 3;
  this.size = 50;
  this.canvas = canvas;
  this.ctx = this.canvas.getContext('2d');
  this.speed = 3;
  this.direction = 0;
  this.x = x;
  this.y = this.canvas.height - 100;
  this.score = 0;
  this.color = color;
}

Player.prototype.draw = function() {
  // left key
  this.ctx.fillStyle = this.color;
  this.ctx.fillRect(this.x - this.size / 2, this.y - this.size / 2, this.size, this.size);

}

Player.prototype.update = function() {
  //this.x = this.x + this.direction * this.speed;
}

Player.prototype.setLives = function() {
  this.lives --;
}

Player.prototype.checkCollisionWithNote = function(note) {
  const collisionTop = this.y - this.size / 2 < note.y + note.size / 2;
  const collisionBottom = this.y + this.size / 2 > note.y - note.size / 2;
  return collisionTop && collisionBottom; // return true if all are true, else return false is at least one is false
}