// review variables 
// var -> function scoped
// let -> block scoped 
// const -> block scoped and declares a variable with a constant value

// Get the canvas element  
const snakeBoard = document.getElementById("snakeBoard");
// Return two dimentional drawing context
const snakeBoardCtx = snakeBoard.getContext("2d");
// Constant 512px / 16parts = 32
const box = 32;

// 8 = midle snakeBoard
let snake = [
    {x: 8 * box,
     y: 8 * box}
]

// start game
main();

// main function called repeatedly to keep the game running
function main(){
    makeCanvas();
}

// draw canvas
function makeCanvas(){
    snakeBoardCtx.fillStyle = "purple"; 
    snakeBoardCtx.fillRect(0, 0, 16 * box, 16 * box);
}