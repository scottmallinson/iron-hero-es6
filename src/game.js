'use strict';
console.log('GAME CONNECTED');

function Game(canvas, audioElement){
  this.playerOne = null;
  this.playerTwo = null;
  this.notes1 = [];
  this.notes2 = [];
  this.canvas = canvas;
  this.ctx = this.canvas.getContext('2d');
  this.gameOver = false;
  this.audio = audioElement;
  this.duration = audioElement.duration;
  this.score = 0;
  this.streak = 0;
};

Game.prototype.startLoop = function() {
  
  this.playerOne = new Player(this.canvas, 'blue', (this.canvas.width / 2) -50);
  this.playerTwo = new Player(this.canvas, 'green', (this.canvas.width / 2) + 50);

  this.playAudio();

  const loop = () => {

    if (Math.random() > 0.99){
      this.notes1.push(new Note(this.canvas, 'red', (this.canvas.width / 2) - 65));
    }
    if (Math.random() > 0.99){
      this.notes2.push(new Note(this.canvas, 'yellow', (this.canvas.width / 2) + 35));
    }

    this.clearCanvas();
    this.updateCanvas();
    this.drawCanvas();
    this.checkOffScreen();
    this.checkDuration();
    
    if (this.gameOver === false) {
      window.requestAnimationFrame(loop);
    }
  }

  window.requestAnimationFrame(loop);

}

Game.prototype.playAudio = function() {
  this.audio.addEventListener('canplaythrough', (event) => {
    setTimeout(function(){
      document.querySelector('audio').play();
    }, 5000)
  });
}

Game.prototype.checkDuration = function() {
  if(this.audio.ended){
    this.gameOver = true;
    this.buildGameOverScreen(this.score);
  }
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
  // DISPLAY SCORE
  this.ctx.font = '18px sans-serif';
  this.ctx.textAlign = 'right';
  this.ctx.fillStyle = 'black';
  this.ctx.fillText(`Score: ${this.score}`, this.canvas.width - 50, 30);
  // DISPLAY STREAK
  this.ctx.font = '18px sans-serif';
  this.ctx.textAlign = 'right';
  this.ctx.fillStyle = 'black';
  this.ctx.fillText(`Streak: ${this.streak}`, this.canvas.width - 50, 50);

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
  // REMOVE NOTES IF THEY HAVEN'T BEEN HIT AND EXIT THE PLAYABLE AREA
  this.notes1.forEach(( note, index) => {
    const isOffScreen = note.checkOffScreen(note);
    if(isOffScreen){
      this.notes1.splice(index, 1);
      this.streak = 0;
    }
  })
  this.notes2.forEach(( note, index) => {
    const isOffScreen = note.checkOffScreen(note);
    if(isOffScreen){
      this.notes2.splice(index, 1);
      this.streak = 0;
    }
  })
}

Game.prototype.checkKeyPressCollisions = function(keyPressEvent) {
  // CHECK IF KEYPRESSES MATCH WHEN NOTE IS WITHIN COLLISION AREA
  let anyNoteHit = false;
  if (keyPressEvent.keyCode == 37) {
    this.notes1.forEach((note, index) => {
      if ((note.y > 488) && (note.y < 538)) {
        const isCollidingOne = this.playerOne.checkCollisionWithNote(note);
        if(isCollidingOne){
          this.score = this.score + 10 * this.streak;
          this.streak += 1;
          anyNoteHit = true;
          this.notes1.splice(index, 1);
        }
      } 
    });
  } else if (keyPressEvent.keyCode == 39) {
    this.notes2.forEach((note, index) => {
      if ((note.y > 488) && (note.y < 538)) {
        const isCollidingTwo = this.playerTwo.checkCollisionWithNote(note);
        if(isCollidingTwo){
          this.score = this.score + 10 * this.streak;
          this.streak += 1;
          anyNoteHit = true;
          this.notes2.splice(index, 1);
        }
      }
    });
  }
  // IF NO NOTES ARE HIT, RESET THE STREAK TO ZERO
  if (!anyNoteHit) {
    this.streak = 0;
  }
}
  
Game.prototype.setGameOverCallback = function(buildGameOverScreen) {
  this.buildGameOverScreen = buildGameOverScreen;
}