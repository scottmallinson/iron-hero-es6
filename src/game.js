'use strict';
console.log('GAME CONNECTED');

function Game(canvas, audio){
  this.playerOne = null;
  this.playerTwo = null;
  this.notes1 = [];
  this.notes2 = [];
  this.canvas = canvas;
  this.ctx = this.canvas.getContext('2d');
  this.gameOver = false;
  this.audio = audio;
  this.duration = audio.duration;
  this.score = 0; // UPDATE SCORE
};

Game.prototype.startLoop = function() {
  
  this.playerOne = new Player(this.canvas, 'blue', (this.canvas.width / 2) -50);
  this.playerTwo = new Player(this.canvas, 'green', (this.canvas.width / 2) + 50);

  this.audio.addEventListener('canplaythrough', (event) => {
    //this.audio.play();
  });
  let timer = 0;

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
    if (this.gameOver === false) {
      window.requestAnimationFrame(loop);
    }
    
    //console.log(this.audio.ended);
    timer = timer + 1;
    //console.log(timer);

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
    // const isCollidingTwo = this.playerTwo.checkCollisionWithNote(note);
    if(isCollidingTwo){
      this.notes1.splice(index, 1);
      console.log('COLLIDED!');
    }
  });
  this.notes2.forEach((note, index) => {
    // const isCollidingOne = this.playerOne.checkCollisionWithNote(note);
    const isCollidingTwo = this.playerTwo.checkCollisionWithNote(note);
    if(isCollidingTwo){
      this.notes2.splice(index, 1);
      console.log('COLLIDED!');
    }
  });
}

Game.prototype.checkKeyPressCollisions = function(keyPressEvent) { // CHECK IF KEYPRESSES MATCH WHEN NOTE IS WITHIN COLLISION AREA
  this.notes1.forEach((note, index) => {
    if ((note.y > 488) && (note.y < 538)) {
      const isCollidingOne = this.playerOne.checkCollisionWithNote(note);
      if(isCollidingOne){
        console.log('HIT!');
        // console.log(note.y);
      } else {
        console.log('MISS!');
        // LOGIC TO END STREAK
      }
    } else {
      // console.log('MISS!');
      // LOGIC TO END STREAK
    }
  });
  this.notes2.forEach((note, index) => {
    if ((note.y > 488) && (note.y < 538)) {
      // const isCollidingOne = this.playerOne.checkCollisionWithNote(note);
      const isCollidingTwo = this.playerTwo.checkCollisionWithNote(note);
      if(isCollidingTwo){
        console.log('HIT!');
        // console.log(note.y);
      } else {
        console.log('MISS!');
        // LOGIC TO END STREAK
      }
    } else {
      // console.log('MISS!');
      // LOGIC TO END STREAK
    }
  });
}
  
Game.prototype.setGameOverCallback = function(buildGameOverScreen) {
  this.buildGameOverScreen = buildGameOverScreen;
}