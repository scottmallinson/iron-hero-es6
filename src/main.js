'use strict';
console.log('MAIN CONNECTED');

function main() {

  const mainElement = document.querySelector('main');

  function buildDom(html) {
    mainElement.innerHTML = html;
    return mainElement;
  }

  function buildSplashScreen(){
    const splashScreen = buildDom(`
      <section>
        <h1>Iron Hero</h1>
        <p>Using the <kbd>←</kbd> and <kbd>→</kbd> keys, try to hit the notes in time.</p>
        <button class="start-button">Start</button>
      </section>
    `);

    const startButton = document.querySelector('.start-button');
    startButton.addEventListener('click', buildGameScreen);
  }

  function buildGameScreen(){
    const gameScreen = buildDom(`
      <section class="game-container">
        <audio src="./audio/track.m4a" preload="auto"></audio>
        <canvas width="720" height="576"></canvas>
      </section>
    `);

    const gameContainerElement = document.querySelector('.game-container');
    const audioElement = document.querySelector('audio');
    const width = gameContainerElement.offsetWidth;
    const height = gameContainerElement.offsetHeight;
    const canvasElement = document.querySelector('canvas');
    canvasElement.setAttribute('width', width);
    canvasElement.setAttribute('height', height);

    const game = new Game(canvasElement, audioElement);
    
    game.startLoop();
    game.setGameOverCallback(buildGameOverScreen);

    document.addEventListener('keydown', function(event){
        game.checkKeyPressCollisions(event);
    });
  }

  function buildGameOverScreen(score){
    const gameOverScreen = buildDom(`
      <section>
        <h1>Game Over!</h1>
        <p>You scored ${score}
      </section>
      <button class="restart-button">Play again</button>
    `);

    const restartButton = document.querySelector('.restart-button');
    restartButton.addEventListener('click', buildGameScreen);
  }

  buildSplashScreen();

}

window.addEventListener('load', main);