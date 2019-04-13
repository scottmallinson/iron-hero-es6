'use strict';

console.log('MAIN CONNECTED');

function main(){

  const mainElement = document.querySelector('main');

  function buildDom(html) {
    mainElement.innerHTML = html;
    return mainElement;
  }

  function updateTitle(name) {
    document.title = name;
  }

  function buildSplash() {
    const title = updateTitle(`Game name`);
    const buildSplash = buildDom(`
    <section>
      <h1>Game name</h1>
      <button class="start-button">Start</button>
    </section>`);

    const startButton = document.querySelector('.start-button');
    startButton.addEventListener('click', buildGameScreen);

  }

  function buildGameScreen() {
    const title = updateTitle(`Game on!`);
    const gameScreen = buildDom(`
    <section>
      <canvas></canvas>
    </section>`);

    const canvasElement = document.querySelector('canvas');
    const game = new Game(canvasElement);
    game.startLoop();
    game.setGameOverCallback(buildGameOverScreen);
    game.setWinCallback(buildWinScreen);

    document.addEventListener('keydown', function(event){
      if (event.keyCode === 37){ // Arrow left keypress
        game.checkKeyPressCollisions(event);
      }
      else if (event.keyCode === 39){ // Arrow right keypress
        game.checkKeyPressCollisions(event);
      }
    });
  }

  function buildGameOverScreen() {
    const title = updateTitle(`Game over`);
    const gameOverScreen = buildDom(`
    <section>
      <h1>Game over!</h1>
      <p>Lorum ipsum</p>
      <button class="start-button">Play again</button>
    </section>
    `);

    const startButton = document.querySelector('.start-button');
    startButton.addEventListener('click', buildGameScreen);
  }

  function buildWinScreen() {
    const title = updateTitle(`Winner!`);
    const winScreen = buildDom(`
    <section>
      <h1>Winner winner chicken dinner!</h1>
      <p>Lorum ipsum</p>
      <button class="start-button">Play again</button>
    </section>
    `);

    const startButton = document.querySelector('.start-button');
    startButton.addEventListener('click', buildGameScreen);
  }

  buildSplash();

}

window.addEventListener('load', main);