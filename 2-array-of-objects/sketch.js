
//create an empty array called balls

let balls = [];

function setup() {
  createCanvas(800, 400);

}

function draw(){
	background(0);
  //buildup();

//	draw all the balls in that array
	for (let i = 0; i < balls.length; i++) {
	    balls[i].drawBall();
      balls[i].moveBall();
	  }
}

function keyPressed(){ //every time you push a key, make a new ball from the ball class and add it to the balls array
if (keyCode === ENTER);
  let  b = new Ball(random(0,800),0);
  balls.push(b);
  console.log(balls);
  return false;
}

//ball class from which to create new balls with similar properties.
class Ball {

	constructor(x,y){ //every ball needs an x value and a y value
		    this.x = x;
    		this.y = y;
	}

	drawBall(){  // draw a ball on the screen at x,y
    		stroke(255,255,255);
    		//fill(random(0,270), random(0,270), random(0,270));
        ellipse(this.x,this.y,random(10,20),random(10,20));
	}

	moveBall(){ //update the location of the ball, so it moves across the screen
    this.x = this.x;
		this.y = this.y+2;
	}


}
