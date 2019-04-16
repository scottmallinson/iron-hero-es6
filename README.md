# Project name
Iron Hero

## Description
A HTML, CSS and JavaScript Guitar Hero clone.


## MVP (DOM - CANVAS)
To build a playable game that can be interacted with through the keyboard, that detects collisions and calculates a score using canvas.


## Backlog
- Countdown to game start
- Multiple songs
- Multiple instruments
- Varying difficulties
- Audio effects
- Animation effects
- Synchronising audio


## Data structure
```Game(){
  this.canvas;
  this.ctx;
  this.duration;
  this.currentPosition;
  this.player;
  this.instrument;
  this.score;
  this.isWin;
  this.isGameOver;
}

Game.prototype.startGame(){
  // display splash screen
}

Game.prototype.startLoop(){
  // initiate game loop
  loop();
}

Game.prototype.renderAll(){
  // display game
}

Game.prototype.updateAll(){
  // update game
}

Game.prototype.clearAll(){
  // erase memory
}

Game.prototype.checkCollision(){
  // detects:
  // 1. if playable note is within playable 'active' area
  // 2. if key press occured whilst playable note is within playable 'active' area
}

Game.prototype.gameOver(){
  // display game over screen
}

Game.prototype.win(){
  // display winning screen
}

Drums(){
  // declare generic instrument variables
  this.notes = {
    left: [{
      // time at which the note appears on screen
      startPosition: timeStamp,
      // time at which the note should be hit
      endPosition: timeStamp
    }],
    right: [{
      // time at which the note appears on screen
      startPosition: timeStamp,
      // time at which the note should be hit
      endPosition: timeStamp
    }]
  };
}

Drums.prototype.render(){
  // displays the drum notes
}```


## States and State Transitions
Definition of the different states and their transition (transition functions)

splashScreen()
- buildSplash()
- addEventListener(startGame)

gameScreen()
- destroySplash()
- destroyGameOver(if)
- destroyWinScreen(if)
- create new Game()
- startGame()

gameoverScreen()
- destroyGameScreen()
- buildGameOverScreen()
- addEventListener(startGame)

winScreen()
- destroyGameScreen()
- buildWinScreen()
- addEventListener(startGame)


## Task
Task definition in order of priority

- Main - buildDOM
- Main - buildSplash
- Main - addEventListener
- Game - buildDOM
- Main - transitions between states
- Main - destroyStates
- Game - createGame
- Game - startGame
- Drums - displayNotes
- Game - add music
- Game - syncing notes to music
- Game - checkCollision
- Game - updateScore
- Game - checkStreak
- Game - durationExceeded
- Game - won
- Game - lost


## Links


### Trello
[Guitar Hero clone Kanban board](https://trello.com/b/19ryU3zr)


### Git
[Game repository](https://github.com/scottmallinson/module-1-project)
[Deployed game](https://scottmallinson.github.io/module-1-project/)


### Slides
URls for the project presentation (slides)
[Link Slides.com](http://slides.com)
