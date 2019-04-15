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
        <h1>Game name</h1>
        <button class="start-button">Start</button>
      </section>
    `);

    const startButton = document.querySelector('.start-button');
    startButton.addEventListener('click', buildGameScreen);
  }

  function buildGameScreen(){
    const gameScreen = buildDom(`
      <section class="game-container">
        <canvas></canvas>
      </section>
    `);

    const gameContainerElement = document.querySelector('.game-container');
    const width = gameContainerElement.offsetWidth;
    const height = gameContainerElement.offsetHeight;
    const canvasElement = document.querySelector('canvas');
    canvasElement.setAttribute('width', width);
    canvasElement.setAttribute('height', height);

    const game = new Game(canvasElement);
    game.startLoop();
    game.setGameOverCallback(buildGameOverScreen);

    document.addEventListener('keydown', function(event){
      if (event.keyCode === 37){ // Arrow left keypress
        game.checkKeyPressCollisions(event);
      }
      else if (event.keyCode === 39){ // Arrow right keypress
        game.checkKeyPressCollisions(event);
      }
    });
  }

  function buildGameOverScreen(){
    const gameOverScreen = buildDom(`
      <section>
        <h1>Game Over!</h1>
      </section>
      <button class="restart-button">Restart</button>
    `);

    const restartButton = document.querySelector('.restart-button');
    restartButton.addEventListener('click', buildGameScreen);
  }

  buildSplashScreen();

}

window.addEventListener('load', main);