// Class 1 ===================
// function setup()
// {
//     createCanvas(800,800);

//     for( var i = 0; i < 100; i ++)
//     {
//         // action
//         fill(random(0,256),random(0,256),random(0,256));
//         ellipse(random(0,800),random(0,800),100,100);
//     }
// }

// function draw()
// {
//     background(255);

//     for( var i = 0; i < 1; i ++)
//     {
//         // action
//         fill(random(0,256),random(0,256),random(0,256));
//         ellipse(random(0,800),random(0,800),100,100);
//     }
// }

// Class 2 ===================

// var x_pos;
// var y_pos;

// function setup()
// {
//     createCanvas(800,800);
// }

// function draw()
// {
//     background(0);
//     fill(255,0,255);
//     x_pos = 100;
//     y_pos = 100;
//     for(var i = 0 ;  i < 20; i++)
//     {
//         ellipse(100 + i * mouseX/20,100 + i * mouseY/20,20,20);
//         // y_pos += 30;
//         // x_pos += 30;
//     }
// }

// Class 3 ===================
function setup()
{
    createCanvas(800,800);
    strokeWeight(2);

}

function draw()
{
    background(255);
    noFill();
    stroke(150);
    // stroke(255,100,0);
    // stroke(220,200,255);
    // stroke(155,0,100);


    for (var i = 0; i < 9; i++)
    {
        var r = 0;
        if(i > 7)
        {
            stroke(220,200,255);
        }
        else if(i > 3)
        {
            stroke(255,100,0);
            r = 20;
        }
        else if (i > 1)
        {
            stroke(155,0,100);
            r = 5;
        }
        else 
        {
            stroke(150);
        }
        rect(80+i*80 + random(-r,r), 
            160 + random(-r,r),
            60, 
            60
            );
    }
    for (var i = 0; i < 9; i++)
    {
        var r = 0;
        if(i > 7)
        {
            stroke(220,200,255);
        }
        else if(i > 3)
        {
            stroke(255,100,0);
            r = 20;
        }
        else if (i > 1)
        {
            stroke(155,0,100);
            r = 5;
        }
        else 
        {
            stroke(150);
        }
        rect(80+i*80 + random(-r,r), 
            240 + random(-r,r),
            60, 
            60
            );
    }
    for (var i = 0; i < 9; i++)
    {
        var r = 0;
        if(i > 7)
        {
            stroke(220,200,255);
        }
        else if(i > 3)
        {
            stroke(255,100,0);
            r = 20;
        }
        else if (i > 1)
        {
            stroke(155,0,100);
            r = 5;
        }
        else 
        {
            stroke(150);
        }
        rect(80+i*80 + random(-r,r), 
            80 + random(-r,r),
            60, 
            60
            );
    }
    for (var i = 0; i < 9; i++)
    {
        var r = 0;
        if(i > 6)
        {
            stroke(220,200,255);
        }
        else if(i > 4)
        {
            stroke(255,100,0);
            r = 20;
        }
        else if (i > 0)
        {
            stroke(155,0,100);
            r = 5;
        }
        else 
        {
            stroke(150);
        }
        rect(80+i*80 + random(-r,r), 
            320 + random(-r,r),
            60, 
            60
            );
    }
    var x = 0; 
    var y = 0;
    
    for(var i = 1 ; i <= 300; i++ ){
        if(i < 100){
          stroke(255,0,0);
        }else if(i < 200){
          stroke(0,255,0);
        }else{
          stroke(0,0,255);
        }
        point(i, 0);
        line(0,10,300,10);
      }
      for(var i = 0; i < 1000; i++){
        if( i < 200){
          ellipse(random(width), random(height), 20, 20);    
        }else{
          rect(random(width), random(height), 20, 20);    
        }
        
        if(i >= 800){
          ellipse(random(width), random(height), 20, 20);
        }
      }

}