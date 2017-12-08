var game = (function() {

    var gridContainer = document.getElementById('grid-wrap');

    var columns = 10;
    var rows = 10;
    var generation = 0;

    var gridSize = rows * columns;
    var generationPrev = [];
    var generationThis = [];
    var generationNext = [];


    function init() {

        initGenerations();
        fillRandomCells();
        drawGrid();


    }

    function evolveToNext() {
        calculateNexGen();
        copyGrids();
        drawGrid();
    }

    function initGenerations() {

        for (var i = 0; i <= rows; i++) {

            generationPrev[i] = [];
            generationNext[i] = [];
            generationThis[i] = [];

            for (var j = 0; j <= columns; j++) {

                generationPrev[i][j] = 0;
                generationNext[i][j] = 0;
                generationThis[i][j] = 0;


            }

        }

    }

    function fillRandomCells() {
        // seed generation
        generationThis[4][6] = 1;
        generationThis[5][5] = 1;
        generationThis[5][6] = 1;
        generationThis[5][7] = 1;
        generationThis[6][5] = 1;
        generationThis[6][6] = 1;
        generationThis[6][7] = 1;
    }

    function drawGrid() {

        gridContainer.innerHTML = '';
        for (var i = 0; i < rows; i++) {

            var row = document.createElement('tr');

            for (var j = 0; j < columns; j++) {

                var column = document.createElement('td');
                if (generationThis[i][j] === 1) {
                    //column.innerHTML = 1;
                    column.style.backgroundColor = "grey";
                }
                column.classList.add('grid');

                row.appendChild(column);

            }

            gridContainer.appendChild(row);
            generation++;

            setTimeout(function() {
                if (generation > 1) {
                    evolveToNext();
                }
            }, 2000);

        }
    }

    function calculateneighbours(i, j) {
        var x = 0;
        x += generationThis[i - 1][j - 1];
        x += generationThis[i - 1][j];
        x += generationThis[i - 1][j + 1];
        x += generationThis[i][j - 1];
        x += generationThis[i][j + 1];
        x += generationThis[i + 1][j - 1];
        x += generationThis[i + 1][j];
        x += generationThis[i + 1][j + 1];
        return x;
    }

    function calculateNexGen() {

        for (var i = 1; i < rows; i++) {

            for (var j = 1; j < columns; j++) {

                var neighbours = calculateneighbours(i, j);

                switch (generationThis[i][j]) {

                    case 0:
                        if ((neighbours == 3)) {
                            generationNext[i][j] = 1;
                        }
                        break;

                    case 1:
                        if ((neighbours == 2) || (neighbours == 3)) {
                            generationNext[i][j] = 1;
                        } else if (neighbours < 2 || neighbours > 3) {
                            generationNext[i][j] = 0;
                        }

                }

            }

        }

    }


    function copyGrids() {
        for (i = 0; i < rows; i++) {
            for (j = 0; j < columns; j++) {
                generationPrev[i][j] = generationThis[i][j];
                generationThis[i][j] = generationNext[i][j];
                generationNext[i][j] = 0;
            }
        }
    }

    return {
        init: init
    };


})();