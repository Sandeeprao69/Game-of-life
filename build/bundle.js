/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "build/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
class GameOfLife {

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
/* harmony export (immutable) */ exports["a"] = GameOfLife;


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__game_of_life__ = __webpack_require__(0);


window.onload = function () {

    let game = new __WEBPACK_IMPORTED_MODULE_0__game_of_life__["a" /* default */](400);

    setInterval(function () {
        game.generateNextGeneration();
    }, 1000);
};

/***/ }
/******/ ]);