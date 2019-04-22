'use strict';

class Player {
  constructor(canvas, color, x) {
    this.size = 50;
    this.canvas = canvas;
    this.ctx = this.canvas.getContext('2d');
    this.speed = 4;
    this.direction = 0;
    this.x = x;
    this.y = 476;
    this.score = 0;
    this.color = color;
  }

  draw() {
    this.ctx.fillStyle = this.color;
    this.ctx.fillRect(this.x - this.size / 2, this.y - this.size / 2, this.size, this.size);
  }

  checkCollisionWithNote(note) {
    const collisionTop = this.y - this.size / 2 < note.y + note.size / 2;
    const collisionBottom = this.y + this.size / 2 > note.y - note.size / 2;
    return collisionTop && collisionBottom;
  }
}