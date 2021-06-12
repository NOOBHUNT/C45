var player,playerImg
var bg,bgImg
var zombie,zombieImg


function preload(){
playerImg=loadImage("images/player.png")
bgImg=loadImage("images/background.jpg")
zombieImg=loadImage("images/zombie1.png")
}
function setup(){
createCanvas(windowWidth,windowHeight);
player=createSprite(windowWidth/2,windowHeight-40,20,20);
player.addImage("player",playerImg);
player.scale=0.2;
}
function draw(){
    background("black");
camera.position.x=player.x;
camera.position.y=player.y;
player.x=mouseX;
player.y=mouseY;

spawnZombies()
    drawSprites()
    
}
function spawnZombies(){
if(frameCount%80===0){
    zombie=createSprite(random(windowWidth-1000,windowWidth+1000),random(windowWidth-1000,windowWidth+1000),20,20)
zombie.addImage("zombie",zombieImg);
zombie.velocityX=3;
}
}