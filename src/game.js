'use strict';

console.log('GAME CONNECTED');

function Game(canvas){
  this.canvas = canvas;
  this.ctx = this.canvas.getContext('2d');
  this.duration = 130; // length of song
  this.currentPosition = 0; // position in song
  this.player;
  this.instrument;
  this.score = 0;
  this.streak = 0;
  this.isWin = false;
  this.isGameOver = false;
}

Game.prototype.startLoop = function() {
  const loop = () => {
    this.clearCanvas();
    this.updateCanvas();
    this.drawCanvas();
    this.checkDuration();
    this.checkCollisions();

    this.currentPosition++; // MOVE INTO checkDuration();

    if (this.isGameOver === false){
      window.requestAnimationFrame(loop);
    }
    console.log(this.isGameOver);
  }

  window.requestAnimationFrame(loop);
}

Game.prototype.clearCanvas = function() {
  this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
}

Game.prototype.updateCanvas = function() {

}

Game.prototype.drawCanvas = function() {
  
}

Game.prototype.checkDuration = function() {
  if (this.currentPosition < this.duration){
    this.isGame = false;
  }
  else if ((this.currentPosition >= this.duration) && (this.score === 0)){
    this.isGameOver = true;
    this.buildGameOverScreen();
  }
  else {
    this.isWin = true;
    this.buildWinScreen();
  }
}

Game.prototype.checkCollisions = function() {

}

Game.prototype.setGameOverCallback = function(buildGameOverScreen) {
  this.buildGameOverScreen = buildGameOverScreen;
}

Game.prototype.setWinCallback = function(buildWinScreen) {
  this.buildWinScreen = buildWinScreen;
}