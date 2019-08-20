let snake;
let rez = 20;
let food;


function setup() {
    createCanvas(600, 600);
    w = floor(width / rez);
    h = floor(height / rez);
    frameRate(10);
    snake = new Snake();
    foodLocation();
}


function draw() {
    if (!snake.endgame()) {
        background(253,191,191);
        scale(rez);
        if (snake.eat(food)) {
            foodLocation();
        }
        snake.eat(food);
        snake.update();
        snake.show();
        snake.endgame();
        noStroke();
        fill(255,0,0);
        rect(food.x, food.y, 1, 1);
    } else {
        console.log("gameover");
        background(173,255,163);
        let s = "GAME OVER. SCORE: " + snake.body.length;
        fill(0);
        console.log(s);
        textSize(40);
        textAlign(CENTER);
        text(s, width/2, height/2);
        noLoop();
    }  
}


function foodLocation () {
    let x = floor(random(w));
    let y = floor(random(h));
    food = createVector(x, y);
}


function keyPressed() {
    if (keyCode === LEFT_ARROW) {
        snake.setdir(-1 , 0);
        }
    else if (keyCode === RIGHT_ARROW) {
        snake.setdir(1 , 0);
        }
    else if (keyCode === DOWN_ARROW) {
        snake.setdir(0 , 1);
        }
    else if (keyCode === UP_ARROW) {
        snake.setdir(0 , -1);
        }       
}

