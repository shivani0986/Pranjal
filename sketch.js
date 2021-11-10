var canvas;
var block1,block2,block3,block4;
var ball, edges;
var music;
var music1;
var music2;
var music3;

function preload()
{
    // load sound here
    music = loadSound("myvoice.mpeg");
    music1 = loadSound("tunaho.mpeg");
    music2 = loadSound("yarrmera.mpeg");
    music3 = loadSound("ONE.mp3");
  }
function setup()
{
    canvas = createCanvas(850,600);
  //create blocks
    block1 = createSprite(15,300,30,800);
    block1.shapeColor = "blue";

    block2 = createSprite(400,15,1000,30);
    block2.shapeColor = "orange";

    block3 = createSprite(510,580,1200,30);
    block3.shapeColor = "yellow";

    block4 = createSprite(830,500,30,1000);
    block4.shapeColor = "green";
  //created ball
    ball = createSprite(425,100,40,40);
    ball.shapeColor = rgb(255,255,255);
}

function draw() 
{
    //background(rgb(169,169,169));
    background("pink");
    edges=createEdgeSprites();
   
    //ball.y = World.mouseY
    //ball.x = World.mouseX 

    stroke("black");
    fill("white");
    textSize(30);
    text("PRANJAL YOU ARE MY BSET FRIEND FOREVER ",30,150);
    //textSize(40);

    stroke("white");
    fill("black");
    textSize(20);
    text("PRANO PLZZZ 1st SEE THE OR CLICK BLUE BOX :) ",30,250);

    stroke("white");
    fill("black");
    textSize(20);
    text("PRANO PLZ CLICK ON THE BOX ONE TIME ONLY PLZZZ",30,350);

    stroke("white");
    fill("black");
    textSize(20);
    text("LISTEN THE SONG ALL THE ONLY TOUCH THE NEXT BOX",30,450);

    stroke("white");
    fill("black");
    textSize(20);
    text("I AM THE BEST LUCKY PERSON TO GET FRIEND LIKE U:)  ",30,550);
    
    if(block1.isTouching(ball) && ball.bounceOff(block1)){
      ball.shapeColor = "blue";
        music.play();
        stroke("blue");
        fill("blue");
        textSize(50);
        text("PRANJAL CUTEE",225,250);
        textSize(100);
        
    }

    if(block2.isTouching(ball)){
        ball.shapeColor = "orange";
        stroke("orange");
        fill("orange");
        textSize(50);
        text("PRANJAL BEST",225,250);
        textSize(100);
        music1.play();
    }

    if(block3.isTouching(ball) && ball.bounceOff(block3))    {
        ball.shapeColor = "yellow"
        stroke("yellow");
        fill("yellow");
        textSize(50);
        text("PRANJAL SMART",225,250);
        textSize(100);
        music2.play();
    }

   if(block4.isTouching(ball) && ball.bounceOff(block4)) {
       ball.shapeColor = "green";
       stroke("green");
       fill("green");
       textSize(50);
       text("PRANO ALAWYS SMILE",225,250);
       textSize(100);
       music3.play();
   }

   
   if (keyDown(UP_ARROW)) {
    ball.velocityX =0;
    ball.velocityY =-4;
}

    if (keyDown(DOWN_ARROW)) {
       ball.velocityX =0;
  ball.velocityY =4;
}

  if (keyDown(LEFT_ARROW)) {
  ball.velocityX =-4;
  ball.velocityY =0;
}

  if (keyDown(RIGHT_ARROW)) {
  ball.velocityX =4;
  ball.velocityY =0;
}

    drawSprites();

}
