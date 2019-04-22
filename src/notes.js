'use strict';

class Note {
  constructor(canvas, color, x) {
    this.speed = 1;
    this.canvas = canvas;
    this.ctx = this.canvas.getContext('2d');
    this.size = 30;
    this.direction = +1;
    this.y = 0 + this.size / 2;
    this.color = color;
    this.x = x;
  }

  draw() {
    this.ctx.fillStyle = this.color;
    this.ctx.fillRect(this.x, this.y - this.size / 2, this.size, 4);
  }

  update() {
    this.y = this.y + this.direction * this.speed;
  }

  checkOffScreen() {
    const offScreen = this.y > this.canvas.height;
    return offScreen;
  }
}