//import './image_viewer';

//const total = sum(5, 6);
//let login = new Login("sandeep", "rao");
//login.login();
//page.init();
//console.log(total);
import GameOfLife from './game-of-life';

window.onload = function() {

    let game = new GameOfLife(400);

    game.getArray();

    setInterval(function() {
        game.generateNextGeneration();
    }, 1000);
}