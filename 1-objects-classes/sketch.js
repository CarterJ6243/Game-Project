//create a variable to hold one ball
let b;
let anotherBall;
let thirdBall;
let fourthBall;

function setup() {
  createCanvas(800, 400);
  b = new Ball(0, 100,"red"); //make a new ball from the Ball class and call it b.
  anotherBall = new Ball(200,20,"yellow");
  thirdBall = new Ball(100,150, "orange");
  fourthBall = new Ball(200,300, "purple");
}


function draw(){
	background("blue");
    b.drawBall(); //draw the ball called b (go look in the Ball class for the drawBall function)
    b.moveBall(); //move the ball called b (go look in the Ball class for the moveBall function)
    anotherBall.drawBall();
    anotherBall.moveBall();
    thirdBall.drawBall();
    thirdBall.moveBall();
    fourthBall.drawBall();
    fourthBall.moveBall();

}


//ball class from which to create new balls with similar properties.
class Ball {

	constructor(x,y,color){ //every ball needs an x value and a y value
		    this.x = x;
    		this.y = y;
        this.color= color;
	}
	drawBall(){  // draw a ball on the screen at x,y
    		stroke(0);
    		fill(this.color);
		    hypercube(this.x,this.y,10,10);
	}
	moveBall(){ //update the location of the ball, so it moves across the screen
		this.x = this.x+2;
		this.y = this.y+.5;
	}
}
  function hypercube_1(x,y) {
  push();
  noFill();
  line(x+125-140,y+105-140,x+125-140,y+170-140);
  line(x+105-140,y+125-140,x+170-140,y+125-140);
  line(x+105-140,y+150-140,x+170-140,y+150-140);
  line(x+150-140,y+170-140,x+150-140,y+105-140);
  line(x+150-140,y+105-140,x+105-140,y+150-140);
  line(x+105-140,y+125-140,x+150-140,y+170-140);
  line(x+125-140,y+170-140,x+170-140,y+125-140);
  line(x+170-140,y+150-140,x+125-140,y+105-140);
  line(x+105-140,y+125-140,x+105-140,y+60-140);
  line(x+105-140,y+60-140,x+170-140,y+60-140);
  line(x+170-140,y+60-140,x+170-140,y+125-140);
  line(x+150-140,y+105-140,x+215-140,y+105-140);
  line(x+215-140,y+105-140,x+215-140,y+170-140);
  line(x+215-140,y+170-140,x+150-140,y+170-140);
  line(x+170-140,y+150-140,x+170-140,y+215-140);
  line(x+170-140,y+215-140,x+105-140,y+215-140);
  line(x+105-140,y+215-140,x+105-140,y+150-140);
  line(x+125-140,y+170-140,x+60-140,y+170-140);
  line(x+60-140,y+170-140,x+60-140,y+105-140);
  line(x+60-140,y+105-140,x+125-140,y+105-140);
  line(x+105-140,y+150-140,x+60-140,y+105-140);
  line(x+60-140,y+105-140,x+105-140,y+60-140);
  line(x+105-140,y+60-140,x+150-140,y+105-140);
  line(x+125-140,y+105-140,x+170-140,y+60-140);
  line(x+170-140,y+60-140,x+215-140,y+105-140);
  line(x+215-140,y+105-140,x+170-140,y+150-140);
  line(x+170-140,y+125-140,x+170-140,y+170-140);
  line(x+215-140,y+170-140,x+170-140,y+215-140);
  line(x+170-140,y+215-140,x+125-140,y+170-140);
  line(x+150-140,y+170-140,x+105-140,y+215-140);
  line(x+105-140,y+215-140,x+60-140,y+170-140);
  line(x+60-140,y+170-140,x+105-140,y+125-140);
  pop();
}
function hypercube(x,y) {
hypercube_1(x+2.5,y+2.5);
}
