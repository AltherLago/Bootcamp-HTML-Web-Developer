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
    {x: 8 * box, y: 8 * box},
    {x: 7 * box, y: 8 * box},
    {x: 6 * box, y: 8 * box}
]

// start game
main();

// main function called repeatedly to keep the game running
function main(){
    makeCanvas();
    makeSnake();
}

// draw canvas
function makeCanvas(){
    //  Select the color to fill the drawing
    snakeBoardCtx.fillStyle = "purple"; 
    snakeBoardCtx.fillRect(0, 0, 16 * box, 16 * box);
}

// draw snake on the canvas
function makeSnake(){
    // draw each part
    for(var i = 0; i < snake.length; i++){
        // Set the colour of the snake par
        snakeBoardCtx.fillStyle = "lightgreen";
        // Set the border colour of the snake part
        snakeBoardCtx.strokestyle = "white";
        // Draw a "filled" rectangle to represent the snake part at the coordinates
        // the part is located
        snakeBoardCtx.fillRect(snake[i].x, snake[i].y, box, box);
        // Draw border around the snake part
        snakeBoardCtx.strokeRect(snake[i].x, snake[i].y, box, box);
    }
}
