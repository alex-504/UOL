/*

The Game Project

Week 3

Game interaction

*/

var gameChar_x;
var gameChar_y;
var floorPos_y;

var isLeft;
var isRight;
var isPlummeting;
var isFalling;

var collectable;

var canyon;

function setup()
{
	createCanvas(1024, 576);
	floorPos_y = height * 3/4;
	gameChar_x = width/2;
	gameChar_y = floorPos_y;
    
    isLeft = false;
    isRight = false;
    isPlummeting = false;
    isFalling = false;
    
    collectable = {x_pos: 300, y_pos: floorPos_y, size: 50, isFound: false};

    canyon = {x_pos: 0, width:100};
    
}

function draw()
{

	///////////DRAWING CODE//////////

	background(100,155,255); //fill the sky blue


	noStroke();
	fill(0,155,0);
	rect(0, floorPos_y, width, height - floorPos_y); //draw some green ground
    
    
    //draw Collectable item
    if(dist(gameChar_x, gameChar_y, collectable.x_pos, collectable.y_pos) < 20)
    {
        collectable.isFound = true;
    } 
    
    if(collectable.isFound == false)
    {
        fill(255,215,0);
        ellipse(collectable.x_pos, collectable.y_pos - 10, 40,40);
    }
    
	//draw the canyon


    fill(100, 155, 255);    
	noStroke();
    quad(canyon.x_pos + 60, 432, canyon.x_pos + 200, 432, canyon.x_pos + 260, 576, canyon.x_pos + 120, 576);
    
    fill(128,128,128);
    triangle(canyon.x_pos + 200, 432, canyon.x_pos + 260, 576, canyon.x_pos + 200, 576);

    fill(105,105,105);
    triangle(canyon.x_pos + 200, 482, canyon.x_pos + 235, 576, canyon.x_pos + 200, 576);
    
    //detect when the character is over the canyon
    if(canyon.x_pos + 60 < gameChar_x && gameChar_x < canyon.x_pos + 200 && gameChar_y >= floorPos_y)
    {
        isPlummeting = true;
    }
//    if(isPlummeting == true)
//    {
//        gameChar_y -= -10;
//    }

	//the game character
	if(isLeft && isFalling)
	{
		// add your jumping-left code
        
        //    face
        fill(255,218,185);
        ellipse(gameChar_x - 5,gameChar_y - 50, 24, 26);    
        
        //    body
        fill(200,150,150);
        ellipse(gameChar_x + 5,gameChar_y - 38, 32,65);

        //    eye
        fill(0);
        ellipse(gameChar_x - 14,gameChar_y - 53, 5, 5);
    
        //    mouth
        fill(255,0,0);
        ellipse(gameChar_x -15,gameChar_y - 45,4,4);
        
        //foot    
        fill(112,128,144);
        stroke(112,128,144);
        rect(gameChar_x +5,gameChar_y - 15, 10, 10);

        //arm
        fill(112,128,144);
        stroke(112,128,144);
        rect(gameChar_x - 5, gameChar_y - 35, 10, 10);  

	}
	else if(isRight && isFalling)
	{
		// add your jumping-right code
        
        //    face
        fill(255,218,185);
        ellipse(gameChar_x + 5,gameChar_y - 50, 24, 26);    
    
        //    body
        fill(200,150,150);
        ellipse(gameChar_x - 5,gameChar_y - 38, 32,65);

        //    eye
        fill(0);
        ellipse(gameChar_x + 13,gameChar_y - 53, 5, 5);
    
        //    mouth
        fill(255,0,0);
        ellipse(gameChar_x +15,gameChar_y - 45,4,4);
        
        //foot    
        fill(112,128,144);
        stroke(112,128,144);
        rect(gameChar_x -18,gameChar_y - 15, 10, 10);

        //arm
        fill(112,128,144);
        stroke(112,128,144);
        rect(gameChar_x - 7, gameChar_y - 35, 10, 10);  

	}
	else if(isLeft)
	{
		// add your walking left code
        
        //    face
        fill(255,218,185);
        ellipse(gameChar_x - 5,gameChar_y - 50, 24, 26);    
    
    
        //    body
        fill(200,150,150);
        ellipse(gameChar_x + 5,gameChar_y - 38, 32,65);

        //    eye
        fill(0);
        ellipse(gameChar_x - 14,gameChar_y - 53, 5, 5);
    
        //    mouth
        fill(0);
        stroke(255,0,0);
        line(gameChar_x - 15,gameChar_y - 45,gameChar_x -13,gameChar_y - 45);
    
        //foot    
        fill(112,128,144);
        stroke(112,128,144);
        rect(gameChar_x -3,gameChar_y - 13, 10, 10);

        //arm
        fill(112,128,144);
        stroke(112,128,144);
        rect(gameChar_x,gameChar_y - 35, 10, 10);    

	}
	else if(isRight)
	{
		// add your walking right code
        
        //    face
        fill(255,218,185);
        ellipse(gameChar_x + 5,gameChar_y - 50, 24, 26);    
    
        //    body
        fill(200,150,150);
        ellipse(gameChar_x - 5,gameChar_y - 38, 32,65);

        //    eye
        fill(0);
        ellipse(gameChar_x + 13,gameChar_y - 53, 5, 5);
    
        //    mouth
        fill(0);
        stroke(255,0,0);
        line(gameChar_x + 15,gameChar_y - 45,gameChar_x + 13,gameChar_y - 45);
    
        //foot    
        fill(112,128,144);
        stroke(112,128,144);
        rect(gameChar_x -3,gameChar_y - 13, 10, 10);

        //arm
        fill(112,128,144);
        stroke(112,128,144);
        rect(gameChar_x - 7, gameChar_y - 35, 10, 10);          

	}
	else if(isFalling || isPlummeting)
	{
		// add your jumping facing forwards code
        
        //    body
        fill(200,150,150);
        ellipse(gameChar_x,gameChar_y - 38, 35,65);

        //    face
        fill(255,218,185);
        ellipse(gameChar_x,gameChar_y - 50, 24, 26);
    
        //    eye
        fill(0);
        ellipse(gameChar_x - 4,gameChar_y - 53, 5, 5);
        ellipse(gameChar_x + 4,gameChar_y - 53, 5, 5);
    
        //    mouth
        fill(255,0,0);
        ellipse(gameChar_x,gameChar_y - 45,5,5);
    
        //foot    
        fill(112,128,144);
        stroke(112,128,144);
        rect(gameChar_x - 15,gameChar_y - 20, 10, 10);
        rect(gameChar_x + 5,gameChar_y - 20, 10, 10);

        //arm
        fill(112,128,144);
        stroke(112,128,144);
        rect(gameChar_x - 20,gameChar_y - 35, 10, 10);
        rect(gameChar_x + 10,gameChar_y - 35, 10, 10);  
        
	}
	else
	{
		// add your standing front facing code
        
        //    body
        fill(200,150,150);
        ellipse(gameChar_x,gameChar_y - 38, 35,65);
        
        //    face
        fill(255,218,185);
        ellipse(gameChar_x,gameChar_y - 50, 24, 26);
        
        //    eye
        fill(0);
        ellipse(gameChar_x - 4,gameChar_y - 53, 5, 5);
        ellipse(gameChar_x + 4,gameChar_y - 53, 5, 5);

        //    mouth
        fill(0);
        stroke(255,0,0);
        line(gameChar_x - 4,gameChar_y - 45,gameChar_x + 4,gameChar_y - 45);
        
        //foot    
        fill(112,128,144);
        stroke(112,128,144);
        rect(gameChar_x - 15,gameChar_y - 9, 10, 10);
        rect(gameChar_x + 5,gameChar_y - 9, 10, 10);
        
        //arm
        fill(112,128,144);
        stroke(112,128,144);
        rect(gameChar_x - 20,gameChar_y - 35, 10, 10);
        rect(gameChar_x + 10,gameChar_y - 35, 10, 10);    

	}

	///////////INTERACTION CODE//////////
	//Put conditional statements to move the game character below here
    if(isLeft == true)
        {
            gameChar_x -=5; //move to left
        }
    if(isRight == true)
        {
            gameChar_x +=5; //move to right
        }   
    
    if(isPlummeting == true)
        {
           gameChar_y += 4; //jump
        }
  
    if(gameChar_y < floorPos_y)
        {
            gameChar_y +=5;
            isFalling = true;
        }
    else
        {
            isFalling = false; 
        }
}

function keyPressed()
{
	// if statements to control the animation of the character when
	// keys are pressed.

	//open up the console to see how these work
	console.log("keyPressed: " + key);
	console.log("keyPressed: " + keyCode);
    
    //Freezing controls
    if(!isPlummeting)
    {

        if(keyCode == 65 && !isPlummeting) //left
        {
            console.log("left arrow");
            isLeft = true;           
        }
        else if(keyCode == 68 && !isPlummeting) //right
        {
            console.log("right arrow");
            isRight = true;   
        }
        else if((keyCode == 87 && !isFalling) && !isPlummeting) //jump
        {
            gameChar_y = gameChar_y -200;

        } 
    }
        
}

function keyReleased()
{
	// if statements to control the animation of the character when
	// keys are released.

	console.log("keyReleased: " + key);
	console.log("keyReleased: " + keyCode);
    
    if(keyCode == 65)
    {
        console.log("left arrow");
        isLeft = false;   
        
    }
    
    if(keyCode == 68)
    {
        console.log("right arrow");
        isRight = false;   
    }
    
    if(keyCode == 87)
    {
        console.log("up arrow");
        isPlummeting = false;
    }

    
}
