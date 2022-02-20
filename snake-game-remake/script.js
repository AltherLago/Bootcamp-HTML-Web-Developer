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

// True if change direction
let changingDirection = false;
// Horizontal deslocation
let dx = box;
// Vertical deslocation
let dy = 0;

let food = {
    x: Math.floor(Math.random() * 15 + 1) * box,
    y: Math.floor(Math.random() * 15 + 1) * box
}

document.addEventListener('keydown', changeDirection);

// Start game
main();

// Main function called repeatedly to keep the game running
function main(){
    changingDirection = false;
    setTimeout(function onTick(){
        makeCanvas();
        moveSnake();
        loopSnakeCanvas();
        makeSnake();
        makeFood();
        console.log(snake);
        // Call main again
        main();
    }, 100)
    
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
        // Set the colour of the snake part
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

function changeDirection(event){
    if(changingDirection) return;
    // For take if first key pressed
    changeDirection = true;
    
    const leftKey = 37;
    const rightKey = 39;
    const upKey = 38;
    const downKey = 40;
    
    // Prevent the snake from reversing
    const keyPressed = event.keyCode;
    const goingRigth = dx === box;
    const goingLeft = dx === -box;
    const goingUp = dy === -box;
    const goingDown = dy === box;
    
    if(keyPressed == leftKey && !goingRigth){
        dx = -box;
        dy = 0;
    }
    if(keyPressed == rightKey && !goingLeft){
        dx = box;
        dy = 0;
    }
    if(keyPressed == upKey && !goingDown){
        dx = 0;
        dy = -box;
    }
    if(keyPressed == downKey && !goingUp){
        dx = 0;
        dy = box;
    }
}

// Loop snack board
function loopSnakeCanvas(){
    const goingRigth = dx === box;
    const goingLeft = dx === -box;
    const goingUp = dy === -box;
    const goingDown = dy === box;
    
    if(snake[0].x > 15 * box && goingRigth) snake[0].x = 0;
    if(snake[0].x < 0 && goingLeft) snake[0].x = 15 * box;
    if(snake[0].y < 0 && goingUp) snake[0].y = 15 * box;
    if(snake[0].y > 15 * box && goingDown) snake[0].y = 0;
}

function makeFood(){
    // Set the colour of the food
    snakeBoardCtx.fillStyle = "#d4d8f9";//"#fed337";
    // Draw a "filled" rectangle to represent the food
    snakeBoardCtx.fillRect(food.x, food.y, box, box);
}

// TODO endGame





