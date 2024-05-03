const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

const cellSize = 20;
const numRows = canvas.height / cellSize;
const numCols = canvas.width / cellSize;

let snake = [{x: 10, y: 10}];
let dx = 0;
let dy = 0;
let food = generateFood();
let score = 0;

document.addEventListener('keydown', changeDirection);

function main() {
    if (checkCollision()) {
        gameOver();
        return;
    }

    if (checkFood()) {
        eatFood();
        food = generateFood();
    } else {
        snake.pop();
    }

    moveSnake();
    draw();
    
    setTimeout(main, 100);
}

main();

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw food
    ctx.fillStyle = 'red';
    ctx.fillRect(food.x * cellSize, food.y * cellSize, cellSize, cellSize);

    // Draw snake
    ctx.fillStyle = 'green';
    snake.forEach(segment => {
        ctx.fillRect(segment.x * cellSize, segment.y * cellSize, cellSize, cellSize);
    });

    // Draw score
    ctx.fillStyle = 'black';
    ctx.font = '20px Arial';
    ctx.fillText(`Score: ${score}`, 10, 30);
}

function moveSnake() {
    const head = {x: snake[0].x + dx, y: snake[0].y + dy};
    snake.unshift(head);
}

function changeDirection(e) {
    if (e.key === 'ArrowUp' && dy !== 1) {
        dx = 0;
        dy = -1;
    } else if (e.key === 'ArrowDown' && dy !== -1) {
        dx = 0;
        dy = 1;
    } else if (e.key === 'ArrowLeft' && dx !== 1) {
        dx = -1;
        dy = 0;
    } else if (e.key === 'ArrowRight' && dx !== -1) {
        dx = 1;
        dy = 0;
    }
}

function checkFood() {
    return snake[0].x === food.x && snake[0].y === food.y;
}

function eatFood() {
    score++;
}

function generateFood() {
    let foodX = Math.floor(Math.random() * numCols);
    let foodY = Math.floor(Math.random() * numRows);
    return {x: foodX, y: foodY};
}

function checkCollision() {
    const head = snake[0];
    return (
        head.x < 0 || head.x >= numCols ||
        head.y < 0 || head.y >= numRows ||
        snake.slice(1).some(segment => segment.x === head.x && segment.y === head.y)
    );
}

function gameOver() {
    alert(`Game over! Your score is ${score}.`);
    window.location.reload();
}
