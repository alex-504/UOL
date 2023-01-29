var wordCloud;
var currentWord;
var wordsX;
var wordssY;

function setup()
{
    createCanvas(500,500);
    wordCloud = [];
    wordsX = [];
    wordsY = [];

    currentWord = "";
}



function draw()
{
    
    background(0);
    fill(255);

    text(currentWord, 20,20);
    text("Word Lenght: " + wordCloud.length, 400,20);
    
    for(var i = 0; i < wordCloud.length; i++)
    {
        text(wordCloud[i], wordsX[i], wordsY[i]);
        
        wordsX[i] -= random((-2),2);
        wordsY[i] -= random(-2,2);
    }
    
}

function keyPressed()
{
    console.log(keyCode,key); //DELETE = 8, RETURN = 13

if(keyCode == 13)
{
    wordCloud.push(currentWord);
    currentWord = ""; // Allows to start typing a new word in a new string
    wordsX.push(random(width/4,width*3/4));
    wordsY.push(random(height/4,height*3/4));
}
else
{
    currentWord += key; 
}

    // currentWord += key;
    
    
}