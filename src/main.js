'use strict';

console.log('MAIN CONNECTED');

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
    <h1>Game screen</h1>
    <canvas></canvas>
    <button class="game-over-button">Game over</button>
    <button class="win-button">Win</button>
  </section>`);

  const gameOverButton = document.querySelector('.game-over-button'); // FOR TESTING - TO REMOVE
  gameOverButton.addEventListener('click', buildGameOverScreen); // FOR TESTING - TO REMOVE
  const winButton = document.querySelector('.win-button'); // FOR TESTING - TO REMOVE
  winButton.addEventListener('click', buildWinScreen); // FOR TESTING - TO REMOVE

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