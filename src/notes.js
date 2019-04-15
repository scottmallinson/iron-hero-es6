'use strict';
console.log('NOTE CONNECTED');

function Note(canvas, color, x){
  this.speed = 1;
  this.canvas = canvas;
  this.ctx = this.canvas.getContext('2d');
  this.size = 30;
  this.direction = +1;
  this.y = 0 + this.size / 2;
  this.color = color;
  this.x = x;
}

Note.prototype.draw = function() {
  this.ctx.fillStyle = this.color;
  this.ctx.fillRect(this.x, this.y - this.size / 2, this.size, this.size);
}

Note.prototype.update = function() {
  this.y = this.y + this.direction * this.speed;
}

Note.prototype.checkOffScreen = function() {
  const offScreen = this.y > this.canvas.height;
  console.log(offScreen);
  return offScreen;
}