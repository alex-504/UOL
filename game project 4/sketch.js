/*

The Game Project Part 4: Side scrolling

*/

var gameChar_x;
var gameChar_y;
var floorPos_y;

var isLeft;
var isFalling;
var isRight;
var isPlummeting;

var collectable;
var canyon;
var treePos_y;
var trees_x;
var clouds_x;
var mountain_x;
var clouds_y;
var mountain_y;

var cameraPosX;


function setup()
{
	createCanvas(1024, 576);
	floorPos_y = height * 3/4;
	gameChar_x = width/2;
	gameChar_y = floorPos_y;

    canyon = {x_pos: 0, width:100};
    collectable = {x_pos: 300, y_pos: floorPos_y, size: 50, isFound: false};

    isLeft = false;
    isRight = false;
    isPlummeting = false;
    isFalling = false;
    
    // each element represents the position of the tree transverse the 'trees_x'
    trees_x = [250, 800, 900, 1000];
    treePos_y = height/2;

    // array of clouds
    clouds_x = [100, 200, 500, 700, 1000];
    clouds_y = 60;
    
    // array of mountains
    mountain_x = [100, 400];
    mountain_y = 100;
    
    // Declare a variable called `cameraPosX` and initialise it to 0
    cameraPosX = 0;
}

function draw()
{

	///////////DRAWING CODE//////////
    
    //fill the sky blue
    c1 = color(255);
    c2 = color(63, 191, 191);
    
    for(let y=0; y<height; y++){
      n = map(y,0,height,0,2);
      let newc = lerpColor(c1,c2,n);
      stroke(newc);
      line(0,y,width, y);
    }
    
    
    //draw some green ground
    noStroke();
	fill(0,155,0);
	rect(0, floorPos_y, width, height - floorPos_y); 
    
    cameraPosX = constrain(gameChar_x -width/2, -width/2, width*2);
    
    push();
    translate(-cameraPosX, 0);
    console.log(cameraPosX)
    
    //draw mountains
    for (var i = 0; i < mountain_x.length; i++)
    {
        console.log("mountains loop" + i);
        
        fill(30,144,255);
        triangle(mountain_x[i] + 250,mountain_y,mountain_x[i] + 150,mountain_y + 332,mountain_x[i] + 450,mountain_y + 332);
        fill(225);
        triangle(mountain_x[i] + 250,mountain_y,mountain_x[i] + 216,mountain_y + 110,mountain_x[i] + 316,mountain_y + 110);

        
        fill(0,105,225);
        triangle(mountain_x[i] + 350,mountain_y + 190,mountain_x[i] + 250,mountain_y + 332,mountain_x[i] + 450,mountain_y + 332);
        fill(225);
        triangle(mountain_x[i] + 350,mountain_y + 190,mountain_x[i] + 308,mountain_y + 250,mountain_x[i] + 395,mountain_y + 250);
    
    }

    //draw the trees
    for (var i = 0; i < trees_x.length; i++)
    {
        console.log("trees loop" + i);
        
        fill(120,100,40);
        rect(trees_x[i],treePos_y,60,150);
        
        //branch
        fill(0,155,0);
        triangle(trees_x[i] - 50, treePos_y + 50, trees_x[i] + 30, treePos_y - 50, trees_x[i] + 110, treePos_y + 50)
        triangle(trees_x[i] - 50, treePos_y, trees_x[i] + 30, treePos_y - 100, trees_x[i] + 110, treePos_y)
    }
    
    //draw clouds
    for (var i = 0; i < clouds_x.length; i++)
    {
        console.log("clouds loop" + i);
        
        fill(255,255,255,100);
        ellipse(clouds_x[i] + 100, clouds_y +90,75,80);
        ellipse(clouds_x[i] + 60, clouds_y +90,30,40);
        ellipse(clouds_x[i] + 150, clouds_y +90,40,40);

    }
    
    //draw Collectable item
    if(dist(gameChar_x, gameChar_y, collectable.x_pos, collectable.y_pos) < 20)
    {
        collectable.isFound = true;
    } 
    
    if(collectable.isFound == false)
    {
        fill('yellow');
        ellipse(collectable.x_pos, collectable.y_pos - 10, 40,40);

    }
    
	//draw the canyon
    fill(63, 191, 191);    
	noStroke();
    quad(canyon.x_pos + 60, 432, canyon.x_pos + 200, 432, canyon.x_pos + 260, 576, canyon.x_pos + 120, 576);
    
    fill(128,128,150);
    triangle(canyon.x_pos + 200, 432, canyon.x_pos + 260, 576, canyon.x_pos + 200, 576);

    fill("brown");
    triangle(canyon.x_pos + 200 , 481 , canyon.x_pos + 234, 575, canyon.x_pos + 205, 575);
    
    
    //detect when the character is over the canyon
    if(canyon.x_pos + 60 < gameChar_x && gameChar_x < canyon.x_pos + 200 && gameChar_y >= floorPos_y)
    {
        isPlummeting = true;
    }
   if(isPlummeting == true)
   {
       gameChar_y -= -1;
   }
    

	//the game character
	if(isLeft && isFalling)
	{
		// add your jumping-left code
        
        //    face
        fill(0,218,185);
        ellipse(gameChar_x - 5,gameChar_y - 50, 24, 26);    
        
        //    body
        fill(200,0,150);
        rect(gameChar_x - 14.7,gameChar_y - 38, 30,35, 5);
        //    eye

        fill("yellow");
        ellipse(gameChar_x - 13,gameChar_y - 53, 10, 10);

        fill(0);
        ellipse(gameChar_x - 14,gameChar_y - 53, 5, 5);
    
        //    mouth
        fill(255,0,0);
        ellipse(gameChar_x -15,gameChar_y - 45,4,4);
        
        //foot    
        fill("black");
        stroke(112,128,144);
        rect(gameChar_x +5,gameChar_y - 15, 10, 10);

        //arm
        fill("black");
        stroke(112,128,144);
        rect(gameChar_x - 5, gameChar_y - 35, 10, 10);  

	}
	else if(isRight && isFalling)
	{
		// add your jumping-right code
        
        //    face
        fill(0,218,185);
        ellipse(gameChar_x + 5,gameChar_y - 50, 24, 26);    
    
        //    body
        fill(200,0,150);
        rect(gameChar_x - 14.7,gameChar_y - 38, 30,35, 5);

        //    eye
        fill("yellow");
        ellipse(gameChar_x + 13,gameChar_y - 53, 10, 10);

        fill(0);
        ellipse(gameChar_x + 13,gameChar_y - 53, 5, 5);
    
        //    mouth
        fill(255,0,0);
        ellipse(gameChar_x +15,gameChar_y - 45,4,4);
        
        //foot    
        fill("black");
        stroke(112,128,144);
        rect(gameChar_x -18,gameChar_y - 15, 10, 10);

        //arm
        fill("black");
        stroke(112,128,144);
        rect(gameChar_x - 7, gameChar_y - 35, 10, 10);  

	}
	else if(isLeft)
	{
		// add your walking left code
        
        //    face
        fill(0,218,185);
        ellipse(gameChar_x - 5,gameChar_y - 50, 24, 26);    
    
    
        //    body
        fill(200,0,150);
        rect(gameChar_x - 14.7,gameChar_y - 38, 30,35, 5);
        //    eye
        fill("yellow");
        ellipse(gameChar_x - 13,gameChar_y - 53, 10, 10);

        fill(0);
        ellipse(gameChar_x - 14,gameChar_y - 53, 5, 5);
    
        //    mouth
        fill(0);
        stroke(255,0,0);
        line(gameChar_x - 15,gameChar_y - 45,gameChar_x -13,gameChar_y - 45);
    
        //foot    
        fill("black");
        stroke(112,128,144);
        rect(gameChar_x -3,gameChar_y - 10, 10, 10);

        //arm
        fill("black");
        stroke(112,128,144);
        rect(gameChar_x,gameChar_y - 35, 10, 10);    

	}
	else if(isRight)
	{
		// add your walking right code
        
        //    face
        fill(0,218,185);
        ellipse(gameChar_x + 5,gameChar_y - 50, 24, 26);    
    
        //    body
        fill(200,0,150);
        rect(gameChar_x - 14.7,gameChar_y - 38, 30,35, 5);

        //    eye

        fill("yellow");
        ellipse(gameChar_x + 13,gameChar_y - 53, 10, 10);

        fill(0);
        ellipse(gameChar_x + 13,gameChar_y - 53, 5, 5);
    
        //    mouth
        fill(0);
        stroke(255,0,0);
        line(gameChar_x + 15,gameChar_y - 45,gameChar_x + 13,gameChar_y - 45);
    
        //foot    
        fill("black");
        stroke(112,128,144);
        rect(gameChar_x -3,gameChar_y - 10, 10, 10);

        //arm
        fill("black");
        stroke(112,128,144);
        rect(gameChar_x - 7, gameChar_y - 35, 10, 10);          

	}
	else if(isFalling || isPlummeting)
	{
		// add your jumping facing forwards code
        
        //    body
        fill(200,0,150);
        rect(gameChar_x - 14.7,gameChar_y - 38, 30,35, 5);

        //    face
        fill(0,218,185);
        ellipse(gameChar_x,gameChar_y - 50, 24, 26);
    
        //    eye
        fill("yellow");
        ellipse(gameChar_x - 4,gameChar_y - 53, 10, 10);
        ellipse(gameChar_x + 4,gameChar_y - 53, 10, 10);

        fill(0);
        ellipse(gameChar_x - 4,gameChar_y - 53, 5, 5);
        ellipse(gameChar_x + 4,gameChar_y - 53, 5, 5);
    
        //    mouth
        fill(255,0,0);
        ellipse(gameChar_x,gameChar_y - 45,5,5);
    
        //foot    
        fill("black");
        stroke(112,128,144);
        rect(gameChar_x - 15,gameChar_y - 20, 10, 10);
        rect(gameChar_x + 5,gameChar_y - 20, 10, 10);

        //arm
        fill("black");
        stroke(112,128,144);
        rect(gameChar_x - 20,gameChar_y - 55, 10, 20);
        rect(gameChar_x + 10,gameChar_y - 55, 10, 20);  
        
	}
	else
	{
		// add your standing front facing code
        
        //    body
        fill(200,0,150);
        rect(gameChar_x - 14.7,gameChar_y - 38, 30,35, 5);
        
        //    face
        fill(0,218,185);
        ellipse(gameChar_x,gameChar_y - 50, 24, 26);
        
        //    eye

        fill("yellow");
        ellipse(gameChar_x - 4,gameChar_y - 53, 10, 10);
        ellipse(gameChar_x + 4,gameChar_y - 53, 10, 10);

        fill(0);
        ellipse(gameChar_x - 4,gameChar_y - 53, 5, 5);
        ellipse(gameChar_x + 4,gameChar_y - 53, 5, 5);

        //    mouth
        fill(0);
        stroke(255,0,0);
        line(gameChar_x - 4,gameChar_y - 45,gameChar_x + 4,gameChar_y - 45);
        
        //foot    
        fill("black");
        stroke(112,128,144);
        rect(gameChar_x - 15,gameChar_y - 9, 10, 10);
        rect(gameChar_x + 5,gameChar_y - 9, 10, 10);
        
        //arm
        fill("black");
        stroke(112,128,144);
        rect(gameChar_x - 20,gameChar_y - 35, 10, 10);
        rect(gameChar_x + 10,gameChar_y - 35, 10, 10);    

    pop();
        
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
        // isPlummeting = false;
    }

    
}
