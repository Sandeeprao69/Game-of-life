export default class GameOfLife {

    constructor(size) {
        this.gridArray = [];
        this.tempGridArray = [];
        this.size = size;
        this.initArray(size);
        this.fillRandom();
        this.drawGrids();
    }

    initArray(size) {
        for (let i = 0; i < size; i++) {
            this.gridArray[i] = [];
            for (let j = 0; j < size; j++) {
                this.gridArray[i][j] = [];
            }
        }
    }

    fillRandom() {
        let fillArray = this.size;
        for (let i = 1; i < fillArray - 1; i++) {
            for (let j = 1; j < fillArray - 1; j++) {
                let radnomNum = Math.floor(Math.random() * 2);
                if (radnomNum === 1) {
                    this.gridArray[i][j] = 1;
                } else {
                    this.gridArray[i][j] = 0;
                }
            }
        }
        this.tempGridArray = this.gridArray;
    }

    generateNextGeneration() {
        for (let i = 1; i < this.size - 1; i++) {
            for (let j = 1; j < this.size - 1; j++) {
                let currenTGrid = this.tempGridArray[i][j];
                let aliveNeighbours = this.findAliveNeighbours(i, j);

                if (this.tempGridArray[i][j] === 0) {
                    if (aliveNeighbours === 3) {
                        this.tempGridArray[i][j] = 0;
                    }
                } else if (this.tempGridArray[i][j] === 1) {
                    if (aliveNeighbours < 2) {
                        this.tempGridArray[i][j] = 0;
                    } else if (aliveNeighbours === 2 || aliveNeighbours === 3) {
                        this.tempGridArray[i][j] = 1;
                    } else if (aliveNeighbours > 3) {
                        this.tempGridArray[i][j] = 0;
                    }
                }
            }
        }
        this.drawGrids();
    }

    findAliveNeighbours(i, j) {
        let alive = 0;

        alive += this.tempGridArray[i - 1][j - 1];
        alive += this.tempGridArray[i - 1][j];
        alive += this.tempGridArray[i - 1][j + 1];
        alive += this.tempGridArray[i][j - 1];
        alive += this.tempGridArray[i][j + 1];
        alive += this.tempGridArray[i + 1][j - 1];
        alive += this.tempGridArray[i + 1][j];
        alive += this.tempGridArray[i + 1][j + 1];
        return alive;
    }

    drawGrids() {
        var c = document.getElementById("myCanvas");
        var ctx = c.getContext("2d");
        ctx.clearRect(0, 0, 400, 400);

        for (var j = 1; j < this.size; j++) {
            for (var k = 1; k < this.size; k++) {
                if (this.tempGridArray[j][k] === 1) {

                    ctx.fillStyle = "#FF0000";
                    ctx.fillRect(j, k, 1, 1);
                } else {
                    ctx.fillStyle = "#000000";
                    ctx.fillRect(j, k, 1, 1);
                }
            }
        }
    }

}