'use strict';
console.log('GAME CONNECTED');

function Game(canvas){
  this.playerOne = null;
  this.playerTwo = null;
  this.notes1 = [];
  this.notes2 = [];
  this.canvas = canvas;
  this.ctx = this.canvas.getContext('2d');
  this.gameOver = false;
  this.duration = 180;
};

Game.prototype.startLoop = function() {
  
  this.playerOne = new Player(this.canvas, 'blue', (this.canvas.width / 2) -50);
  this.playerTwo = new Player(this.canvas, 'green', (this.canvas.width / 2) + 50);

  const loop = () => {

    if(Math.random() > 0.99){
      this.notes1.push(new Note(this.canvas, 'red', (this.canvas.width / 2) - 65));
    }
    if(Math.random() > 0.99){
      this.notes2.push(new Note(this.canvas, 'yellow', (this.canvas.width / 2) + 35));
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
  this.playerOne.update();
  this.playerTwo.update();
  this.notes1.forEach(function(note){
    note.update();
  });
  this.notes2.forEach(function(note){
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

  this.playerOne.draw();
  this.playerTwo.draw();
  this.notes1.forEach(function(note){
    note.draw();
  })
  this.notes2.forEach(function(note){
    note.draw();
  })
}

Game.prototype.checkOffScreen = function() {
  this.notes1.forEach(( note, index) => {
    const isOffScreen = this.note.checkOffScreen(note);
    if(isOffScreen){
      this.notes1.splice(index, 1);
      console.log('OFF SCREEN!');
    }
  })
  this.notes2.forEach(( note, index) => {
    const isOffScreen = this.note.checkOffScreen(note);
    if(isOffScreen){
      this.notes2.splice(index, 1);
      console.log('OFF SCREEN!');
    }
  })
}

Game.prototype.checkCollisions = function() {
  this.notes1.forEach((note, index) => {
    const isCollidingOne = this.playerOne.checkCollisionWithNote(note);
    const isCollidingTwo = this.playerTwo.checkCollisionWithNote(note);
    if(isCollidingOne || isCollidingTwo){
      this.notes1.splice(index, 1);
      console.log('COLLIDED!');
    }
  });
  this.notes2.forEach((note, index) => {
    const isCollidingOne = this.playerOne.checkCollisionWithNote(note);
    const isCollidingTwo = this.playerTwo.checkCollisionWithNote(note);
    if(isCollidingOne || isCollidingTwo){
      this.notes2.splice(index, 1);
      console.log('COLLIDED!');
    }
  });
}

Game.prototype.checkKeyPressCollisions = function(keyPressEvent) { // CHECK IF KEYPRESSES MATCH WHEN NOTE IS WITHIN COLLISION AREA
  this.notes1.forEach((note, index) => {
    const hitAreaMinY = this.canvas.height - 125;
    const hitAreaMaxY = this.canvas.height - 75;
    // console.log('hitAreaMinY: ', hitAreaMinY); // 488
    // console.log('hitAreaMaxY: ', hitAreaMaxY); // 538
    if ((note.y > 488) && (note.y < 538)) {
      const isCollidingOne = this.playerOne.checkCollisionWithNote(note);
      const isCollidingTwo = this.playerTwo.checkCollisionWithNote(note);
      if(isCollidingOne || isCollidingTwo){
        console.log('HIT!');
        // console.log(note.y);
      } else {
        console.log('MISS!');
      }
    } else {
      // console.log('MISS!');
    }
  });
  this.notes2.forEach((note, index) => {
    const hitAreaMinY = this.canvas.height - 125;
    const hitAreaMaxY = this.canvas.height - 75;
    // console.log('hitAreaMinY: ', hitAreaMinY); // 488
    // console.log('hitAreaMaxY: ', hitAreaMaxY); // 538
    if ((note.y > 488) && (note.y < 538)) {
      const isCollidingOne = this.playerOne.checkCollisionWithNote(note);
      const isCollidingTwo = this.playerTwo.checkCollisionWithNote(note);
      if(isCollidingOne || isCollidingTwo){
        console.log('HIT!');
        // console.log(note.y);
      } else {
        console.log('MISS!');
      }
    } else {
      // console.log('MISS!');
    }
  });
}
  
Game.prototype.setGameOverCallback = function(buildGameOverScreen) {
  this.buildGameOverScreen = buildGameOverScreen;
}