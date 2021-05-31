class Box{
    constructor(x, y){
       //JSON Format
        var options={
            restitution:1.0,
        }
        this.body = Bodies.rectangle(x, y, 50, 50, options);

        World.add(world, this.body);
}

display(){
    var pos = this.body.position;
    rectMode(CENTER);
    rect(pos.x, pos.y, 50, 50);
}

}