import GameOfLife from './game-of-life';

window.onload = function() {

    let game = new GameOfLife(400);
    game.generateNextGeneration();
    // setInterval(function() {
    //     game.generateNextGeneration();
    // }, 1000);
}