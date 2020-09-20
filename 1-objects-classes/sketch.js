let b;
let anotherBall;
let thirdBall;
//let firstobject;
//let secondobject;

function setup() {
  createCanvas(800, 400);
  b = new RoundThing(300, 100,"red"); //make a new ball from the Ball class and call it b.
  anotherBall = new RoundThing(200,300,"yellow");
  thirdBall = new RoundThing(500,150,"white");
  //firstobject = new NewObject(200,400,"green");
  //secondobject = new NewObject(300.50,"pink");
}


function draw(){
	background("blue");
    b.drawBall(); //draw the ball called b (go look in the Ball class for the drawBall function)
    b.moveBall(); //move the ball called b (go look in the Ball class for the moveBall function)
    anotherBall.drawBall();
    anotherBall.moveBall();
    thirdBall.drawBall();
    thirdBall.moveBall();
    //firstobject.drawObject();
    //firstobject.moveObject();
    //secondobject.drawObject();
    //secondobject.moveObject();


}


//ball class from which to create new balls with similar properties.
class RoundThing {

	constructor(x,y,color){ //every ball needs an x value and a y value
		    this.x = x;
    		this.y = y;
        this.color= color;
	}
	drawBall(){  // draw a ball on the screen at x,y
    		stroke(0);
        strokeWeight(20);
    		fill(this.color);
		    ellipse(this.x,this.y,10,10);
	}
	moveBall(){ //update the location of the ball, so it moves across the screen
		this.x = this.x+random(-1,1);
		this.y = this.y+random(-1,1);
	}
}

//class NewObject {

  //constructor(x,y,color){
      this.x = x;
      this.y = y;
      this.color= color;
  //}
  //drawObject(){
    stroke(0)
    fill(this.color)
    rect(this.x,this.y,400,200)
//  }
//  moveObject(){
    this.x = this.x+random(-1,1);
    this.y = this.y+random(-1.1)
//  }
