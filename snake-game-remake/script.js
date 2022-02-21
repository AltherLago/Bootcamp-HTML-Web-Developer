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

// If true change direction
let changingDirection = false;
// Horizontal deslocation
let dx = box;
// Vertical deslocation
let dy = 0;

let food = {
    x: Math.floor(Math.random() * 15 + 1) * box,
    y: Math.floor(Math.random() * 15 + 1) * box
}

let score = 0;

document.addEventListener('keydown', changeDirection);

// Start game
main();

// Main function called repeatedly to keep the game running
function main(){

    if(endGame()) return;

    changingDirection = false;
    setTimeout(function onTick(){
        makeCanvas();
        moveSnake();
        loopSnakeCanvas();
        eatFood();
        makeSnake();
        makeFood();
        // Repeat 
        main();
    }, 100)
    
}

// Draw canvas
function makeCanvas(){
    //  Select the color to fill the drawing
    snakeBoardCtx.fillStyle = "#89107f"; 
    snakeBoardCtx.fillRect(0, 0, 16 * box, 16 * box);
}

// Draw snake on the canvas
function makeSnake(){
    // Draw each part
    for(var i = 0; i < snake.length; i++){
        // Set the colour of the snake part
        snakeBoardCtx.fillStyle = "#15b774";
        // Set the border colour of the snake part
        snakeBoardCtx.strokeStyle = '#5f6e03';
        // Draw a "filled" rectangle to represent the snake part at the coordinates
        // the part is located
        snakeBoardCtx.fillRect(snake[i].x, snake[i].y, box, box);
        // Draw border around the snake part
        snakeBoardCtx.strokeRect(snake[i].x, snake[i].y, box, box);
    }
}

// keep moving snake
function moveSnake(){
    // Crate´s the new snake head
    const head = {
        x: snake[0].x + dx,
        y: snake[0].y + dy
    }
    // Add the new head to beging of snake body
    snake.unshift(head);
}

// Control directions of snake
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

// Draw food
function makeFood(){
    // Set the colour of the food
    snakeBoardCtx.fillStyle = "#dace8c";
    // Draw a "filled" rectangle to represent the food
    snakeBoardCtx.fillRect(food.x, food.y, box, box);
}

// Eat food
function eatFood(){
    var hasEatFood = snake[0].x === food.x && snake[0].y === food.y;

    if(hasEatFood){
        score++;
        // Display score on screen
        document.getElementById('score').innerHTML = score;
        // Change food position build new random position 
        food.x = Math.floor(Math.random() * 15 + 1) * box;
        food.y = Math.floor(Math.random() * 15 + 1) * box;
    } else{
        // remove tail
        snake.pop();
    }
}

function endGame(){
    // Verify colision with yourself
    for(var i = 1; i < snake.length; i++){
        colision = snake[0].x === snake[i].x && snake[0].y === snake[i].y;
        if(colision){
            return true;
        }
    }
}


// TODO CSS




