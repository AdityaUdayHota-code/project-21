var canvas,edges;
var music;
var jumpingBox;
var block1,block2,block3,block4;

function preload(){

    music = loadSound("music.mp3");

}

function setup(){
    canvas = createCanvas(800,600);

    jumpingBox = createSprite(400,300,20,20);
    jumpingBox.velocityX = 8;
    jumpingBox.velocityY = 4;
    jumpingBox.debug = true;

    block1 = createSprite(100,580,190,20);
    block1.shapeColor = "red";
    block2 = createSprite(300,580,190,20);
    block2.shapeColor = "blue";
    block3 = createSprite(500,580,190,20);
    block3.shapeColor = "green";
    block4 = createSprite(700,580,190,20);
    block4.shapeColor = "pink";

}

function draw() {
    background(rgb(169,169,169));

    edges = createEdgeSprites();

    jumpingBox.bounceOff(edges);
    jumpingBox.bounceOff(block1);
    jumpingBox.bounceOff(block2);
    jumpingBox.bounceOff(block3);
    jumpingBox.bounceOff(block4);

    if(block1.isTouching(jumpingBox)){

        jumpingBox.shapeColor = "red";
        music.play();

    }

    if(block2.isTouching(jumpingBox)){

        jumpingBox.shapeColor = "blue";

    }

    if(block3.isTouching(jumpingBox)){

        jumpingBox.shapeColor = "green";

    }

    if(block4.isTouching(jumpingBox)){

        jumpingBox.velocityX = 0;
        jumpingBox.velocityY = 0;
        music.stop();
        
    }


    drawSprites();

}


