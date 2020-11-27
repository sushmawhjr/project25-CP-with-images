class Paper {

    constructor(x,y,r){

        var options  = {

            restitution: 0.5,
            density:1.5,
            friction:0.5
            
        }
       
       this.body =  Matter.Bodies.circle(x,y,r,options);
       Matter.World.add(wld, this.body); 
       this.r  = r;
       this.image  = loadImage("paper.png");
    }

    show(){

        push();
        

        // translate(this.body.position.x,this.body.position.y)
        fill("white");
        // ellipseMode(CENTER);
        // ellipse(this.body.position.x,this.body.position.y, this.r*2, this.r*2)
        image(this.image ,this.body.position.x , this.body.position.y-20,50,50);
        pop();
    }

}