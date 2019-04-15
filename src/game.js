'use strict';
console.log('GAME CONNECTED');

function Game(canvas){
  this.player = null;
  this.notes = [];
  this.canvas = canvas;
  this.ctx = this.canvas.getContext('2d');
  this.gameOver = false;
  this.duration = 180;
};

Game.prototype.startLoop = function() {
  
  this.player = new Player(this.canvas);

  const loop = () => {

    if(Math.random() > 0.99){
      this.notes.push(new Note(this.canvas))
    }

    this.clearCanvas();
    this.updateCanvas();
    this.drawCanvas();
    // this.checkOffScreen();
    
    //this.checkCollisions();
    if (this.gameOver === false){
      window.requestAnimationFrame(loop);
    }

  }

  window.requestAnimationFrame(loop);

}

Game.prototype.clearCanvas = function() {
  this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
}

Game.prototype.updateCanvas = function() {
  this.player.update();
  this.notes.forEach(function(note){
    note.update();
  })
}

Game.prototype.drawCanvas = function() {
  // DRAW FRET BOARD
  this.ctx.fillStyle = "purple";
  this.ctx.fillRect(this.canvas.width/2 - 100, 0, 200, this.canvas.height);
  // DRAW COLLISION AREA
  this.ctx.fillStyle = "orange";
  this.ctx.fillRect(0, this.canvas.height - 150, this.canvas.width, 100);

  this.player.draw();
  this.notes.forEach(function(note){
    note.draw();
  })
}

Game.prototype.checkOffScreen = function() {
  this.notes.forEach(( note, index) => {
    const isOffScreen = this.note.checkOffScreen(note);
    if(isOffScreen){
      this.notes.splice(index, 1);
      console.log('OFF SCREEN!');
    }
  })
}

Game.prototype.checkCollisions = function() {
  this.notes.forEach((note, index) => {
    const isColliding = this.player.checkCollisionWithNote(note);
    if(isColliding){
      this.notes.splice(index, 1);
      // console.log('COLLIDED!');
    }
  });
}

Game.prototype.checkKeyPressCollisions = function(keyPressEvent) { // CHECK IF KEYPRESSES MATCH WHEN NOTE IS WITHIN COLLISION AREA
  this.notes.forEach((note, index) => {
    const hitAreaMinY = this.canvas.height - 150;
    const hitAreaMaxY = this.canvas.height - 50;
    // console.log('hitAreaMinY: ', hitAreaMinY); // 463
    // console.log('hitAreaMaxY: ', hitAreaMaxY); // 563
    if ((note.y > this.canvas.height - 150) && (note.y < this.canvas.height - 50)) {
      const isColliding = this.player.checkCollisionWithNote(note);
      if(isColliding){
        // console.log('HIT!');
        console.log(note.y);
      } else {
        // console.log('MISS!');
      }
    } else {
      // console.log('MISS!');
    }
  });
}
  
Game.prototype.setGameOverCallback = function(buildGameOverScreen) {
  this.buildGameOverScreen = buildGameOverScreen;
}