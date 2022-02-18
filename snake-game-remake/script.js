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

// Horizontal deslocation
let dx = box;
// Vertical deslocation
let dy = 0;

// Start game
main();

// Main function called repeatedly to keep the game running
function main(){
    setTimeout(function onTick(){
        makeCanvas();
        makeSnake();
        moveSnake();
        console.log(snake);
        // Call main again
        main();
    }, 3000)
    
}

// Draw canvas
function makeCanvas(){
    //  Select the color to fill the drawing
    snakeBoardCtx.fillStyle = "purple"; 
    snakeBoardCtx.fillRect(0, 0, 16 * box, 16 * box);
}

// Draw snake on the canvas
function makeSnake(){
    // Draw each part
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

function moveSnake(){
    // Crate´s the new Snake´s head
    const head = {
        x: snake[0].x + dx,
        y: snake[0].y + dy
    }
    // Add the new head to beging of snake body
    snake.unshift(head);
    snake.pop();

}


