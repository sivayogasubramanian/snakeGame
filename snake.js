class Snake {
    constructor() {
        this.body = [];
        this.body[0] = createVector(w/2, h/2);
        this.xdir = 0;
        this.ydir = 0;
    }

show() {
    
    for (let i = 0; i < this.body.length; i++) {
        fill(0);
        rect(this.body[i].x, this.body[i].y, 1, 1);
        noStroke();
    }
    
}  


update() {
    let head = this.body[this.body.length-1].copy();
    this.body.shift();
    head.x += this.xdir;
    head.y += this.ydir;
    this.body.push(head);
}


setdir(x, y) {
    this.xdir = x;
    this.ydir = y;
}


eat(pos) {
    let x = this.body[this.body.length-1].x;
    let y = this.body[this.body.length-1].y;
    if (x == pos.x && y == pos.y) {
        this.grow();
        return true;
    }
}


grow() {
    let head = this.body[this.body.length-1].copy();
    this.body.push(head);
}


endgame() {       
    let x = this.body[this.body.length-1].x;
    let y = this.body[this.body.length-1].y; 
    
    if (x < 0 || y < 0 || x > w-1 || y > h-1){
        return true;
    }
    
    for (let i = 0; i < this.body.length-1; i++) {
        let part = this.body[i];
        if(part.x == x && part.y == y) {
            return true;
        }
    }   
}

scorecount() {
    let s = "SCORE: " + snake.body.length;
        text(s, w/100, h/40);
        fill(0, 102, 153);
        textSize(0.75);
}


}
