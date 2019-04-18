'use strict';

function Game(canvas, audioElement){
  this.playerOne = null;
  this.playerTwo = null;
  this.notes1 = [];
  this.notes2 = [];
  this.canvas = canvas;
  this.ctx = this.canvas.getContext('2d');
  this.gameOver = false;
  this.audio = audioElement;
  this.elapsedTime = 0;
  this.player1score = 0;
  this.player2score = 0;
  this.player1streak = 0;
  this.player2streak = 0;
};

Game.prototype.handleStartNotesGuitar = function(canvas) {
  let note = new Note(canvas, 'red', (this.canvas.width / 2) - 65);
  this.notes1.push(note);    
}

Game.prototype.handleStartNotesDrums = function(canvas) {
  let note = new Note(canvas, 'yellow', (canvas.width / 2)+ 35);
  this.notes2.push(note);    
}

Game.prototype.startLoop = function() {
  
  this.playerOne = new Player(this.canvas, 'blue', (this.canvas.width / 2) - 50);
  this.playerTwo = new Player(this.canvas, 'green', (this.canvas.width / 2) + 50);
  
  for (let j = 0; j < guitar.length; j++){
    setTimeout(()=>{this.handleStartNotesGuitar(this.canvas)}, guitar[j]);
  }
  
  for (let i = 0; i < drums.length; i++){
    setTimeout(()=>{this.handleStartNotesDrums(this.canvas)}, drums[i]);
  }

  this.audio.addEventListener('canplaythrough', (event) => {

    this.startTimer();
    this.playAudio();
    
    const loop = () => {

      this.clearCanvas();
      this.updateCanvas();
      this.drawCanvas(this.elapsedTime);
      this.checkOffScreen();
      this.checkDuration();
      
      if (this.gameOver === false) {
        window.requestAnimationFrame(loop);
      }
    }

    window.requestAnimationFrame(loop);

  });

}

Game.prototype.startTimer = function() {
  this.elapsedTime = 7057;
  setInterval(function() {
    this.elapsedTime++
  }.bind(this), 1);
}

Game.prototype.playAudio = function() {
  // DELAY THE AUDIO PLAYBACK TO ALLOW THE NOTES TO APPEAR IN PLACE
  setTimeout(function(){
    document.querySelector('audio').play();
  }, 5500);
}

Game.prototype.checkDuration = function() {
  // CHECK IF THE DURATION HAS ELAPSED, AND IF SO, MOVE TO THE GAMEOVER SCREEN
  if(this.elapsedTime >= 19000){
    this.gameOver = true;
    this.buildGameOverScreen(this.player1score, this.player2score);
  }
}

Game.prototype.clearCanvas = function() {
  // CLEAR THE CANVAS EACH LOOP
  this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
}

Game.prototype.updateCanvas = function() {
  // UPDATE THE POSITION OF THE NOTES
  this.notes1.forEach(function(note){
    note.update();
  });
  this.notes2.forEach(function(note){
    note.update();
  })
}

Game.prototype.drawCanvas = function() {
  // DRAW FRET BOARD
  this.ctx.fillStyle = "rgba(255, 255, 255, 0.3)";
  this.ctx.fillRect(260, 0, 200, this.canvas.height);
  // DRAW COLLISION AREA
  this.ctx.fillStyle = "rgba(255, 255, 255, 0.3)";
  this.ctx.fillRect(0, 426, this.canvas.width, 100);
  // DISPLAY PLAYER1 TEXT
  this.ctx.font = '16px sans-serif';
  this.ctx.textAlign = 'left';
  this.ctx.fillStyle = 'white';
  this.ctx.fillText('Player 1', 10, 15);
  // DISPLAY PLAYER1 SCORE
  this.ctx.font = '16px sans-serif';
  this.ctx.textAlign = 'left';
  this.ctx.fillStyle = 'white';
  this.ctx.fillText(`Score: ${this.player1score}`, 10, 35);
  // DISPLAY PLAYER1 STREAK
  this.ctx.font = '16px sans-serif';
  this.ctx.textAlign = 'left';
  this.ctx.fillStyle = 'white';
  this.ctx.fillText(`Streak: ${this.player1streak}`, 10, 55);
  // DISPLAY PLAYER2 TEXT
  this.ctx.font = '16px sans-serif';
  this.ctx.textAlign = 'right';
  this.ctx.fillStyle = 'white';
  this.ctx.fillText('Player 2', this.canvas.width - 10, 15);
  // DISPLAY PLAYER2 SCORE
  this.ctx.font = '16px sans-serif';
  this.ctx.textAlign = 'right';
  this.ctx.fillStyle = 'white';
  this.ctx.fillText(`Score: ${this.player2score}`, this.canvas.width - 10, 35);
  // DISPLAY PLAYER2 STREAK
  this.ctx.font = '16px sans-serif';
  this.ctx.textAlign = 'right';
  this.ctx.fillStyle = 'white';
  this.ctx.fillText(`Streak: ${this.player2streak}`, this.canvas.width - 10, 55);
  // DISPLAY PLAYER1
  this.playerOne.draw();
  // DISPLAY PLAYER2
  this.playerTwo.draw();
  // DISPLAY THE NOTES
  this.notes1.forEach((note) => {
    note.draw();
  })
  this.notes2.forEach((note) =>{
    note.draw();
  })
}

Game.prototype.checkOffScreen = function() {
  // REMOVE NOTES IF THEY HAVEN'T BEEN HIT AND EXIT THE PLAYABLE AREA
  this.notes1.forEach((note, index) => {
    const isOffScreen = note.checkOffScreen(note);
    if(isOffScreen){
      this.notes1.splice(index, 1);
      this.player1streak = 0;
    }
  })
  this.notes2.forEach((note, index) => {
    const isOffScreen = note.checkOffScreen(note);
    if(isOffScreen){
      this.notes2.splice(index, 1);
      this.player2streak = 0;
    }
  })
}

Game.prototype.getHighScore = function(gameWinningScore) {
  let currentHighScore = window.localStorage.getItem('highScore');
  if(!gameWinningScore && currentHighScore){
    return currentHighScore;
  }
  // CHECK IF A HIGH SCORE HAS BEEN SET PREVIOUSLY
  if(currentHighScore){
    // IF THE LATEST HIGH SCORE IS HIGHER THAN THE SAVED HIGH SCORE, OVERWRITE IT
    if(gameWinningScore > currentHighScore){
      window.localStorage.setItem('highScore',gameWinningScore);
      return gameWinningScore;
    } else {
    // OTHERWISE RETURN THE SAVED HIGH SCORE
      return currentHighScore;
    }
  } else {
    // IF NO HIGH SCORE HAS BEEN SAVED, SAVE THE LATEST HIGH SCORE
    window.localStorage.setItem('highScore',gameWinningScore);
    return gameWinningScore;
  }
}

Game.prototype.checkKeyPressCollisions = function(keyPressEvent) {
  // CHECK IF KEYPRESSES MATCH WHEN NOTE IS WITHIN COLLISION AREA
  let player1NoteHit = false;
  let player2NoteHit = false
  if (keyPressEvent.keyCode == 37) {
    this.notes1.forEach((note, index) => {
      if ((note.y > 451) && (note.y < 501)) {
        // DETECT IF NOTE IS WITHIN COLLISION BOUNDARIES
        const isCollidingOne = this.playerOne.checkCollisionWithNote(note);
        if (isCollidingOne) {
          if (this.player1streak != 0){
            this.player1score = this.player1score + 10 * this.player1streak;
          } else {
            this.player1score = this.player1score + 10;
          }
          this.player1streak += 1;
          player1NoteHit = true;
          this.notes1.splice(index, 1);
        }
      } 
    });
  } else if (keyPressEvent.keyCode == 39) {
    this.notes2.forEach((note, index) => {
      if ((note.y > 451) && (note.y < 501)) {
        // DETECT IF NOTE IS WITHIN COLLISION BOUNDARIES
        const isCollidingTwo = this.playerTwo.checkCollisionWithNote(note);
        if (isCollidingTwo) {
          if (this.player2streak != 0){
            this.player2score = this.player2score + 10 * this.player2streak;
          } else {
            this.player2score = this.player2score + 10;
          }
          this.player2streak += 1;
          player2NoteHit = true;
          this.notes2.splice(index, 1);
        }
      }
    });
  }
  // IF NO NOTES ARE HIT, RESET THE STREAK TO ZERO
  if (!player1NoteHit) {
    this.player1streak = 0;
  }
  if (!player2NoteHit) {
    this.player2streak = 0;
  }
}
  
Game.prototype.setGameOverCallback = function(buildGameOverScreen) {
  this.buildGameOverScreen = buildGameOverScreen;
}