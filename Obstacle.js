class Obstacle {
    constructor(x, y, width, height){
        options = {
            isStatic
        }
        this.body = Bodies.rectangle(x,y,width,height);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
    }

    display(){
        var pos =this.body.position;
        rectMode(CENTER);
        fill(57,255,20);
        rect(pos.x, pos.y, width, height);
    }
}