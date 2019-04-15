'use strict';
console.log('PLAYER CONNECTED');

function Player(canvas){
  this.lives = 3;
  this.size = 50;
  this.canvas = canvas;
  this.ctx = this.canvas.getContext('2d');
  this.speed = 3;
  this.direction = 0;
  this.x = this.canvas.width / 2;
  this.y = this.canvas.height - 50;
  this.score = 0;
}

Player.prototype.draw = function() {
  // left key
  this.ctx.fillStyle = "blue";
  this.ctx.fillRect(this.x - this.size / 2 - 50, this.canvas.height - 125, this.size, this.size);
  // right key
  this.ctx.fillStyle = "green";
  this.ctx.fillRect(this.x - this.size / 2 + 50, this.canvas.height - 125, this.size, this.size);
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