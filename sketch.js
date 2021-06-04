
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var bananaGroup  , obstacleGroup
var survivalTime=0,ground,score=0;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  monkey = createSprite(50,315,20,20);
  monkey.addAnimation("moving",monkey_running);
  monkey.scale = 0.085;
  
  
  ground = createSprite(400,350,900,7)
 
  bananaGroup = new Group();
  obstacleGroup = new Group();
}


function draw() {
background("turquoise");
  monkey.collide(ground)
  if(keyDown("space")){
   
  monkey.velocityY = -12;
   }
  monkey.velocityY = monkey.velocityY + 0.8;
  
  
  stroke("cyan");
  fill("black");
  textSize(20);
  text("Score : "+score,300,40);
  if(monkey.isTouching(bananaGroup)){
    score = score + 1;
    bananaGroup.destroyEach();
  }
if(monkey.isTouching(obstacleGroup)){
    score  = 0;
    survivalTime = 0;
    monkey.x = 50;
    monkey.y = 315;
    obstacleGroup.velocityX = 0;
    bananaGroup.velocityX = 0;
  }
  
  stroke("cyan");
  fill("black");
  textSize(20);
  survivalTime = Math.ceil(frameCount/frameRate())
  text("Surival Time: "+survivalTime,15,40)

  drawSprites();
  bananasprite();
  obstacles();
}

function bananasprite(){
  if(frameCount % 80 === 0){
    banana = createSprite(400,200,15,15);
    banana.addImage(bananaImage);
    banana.scale = 0.09
    banana.y = Math.round(random(120,200))
    banana.velocityX = -5;
    bananaGroup.add(banana);
  }
  
  
}

function obstacles(){
  if(frameCount % 100 === 0){
    obstacle = createSprite(400,316,20,20);
    obstacle.addImage(obstacleImage);
    obstacle.scale = 0.2;
    obstacle.velocityX = -6;
    obstacleGroup.add(obstacle)
  }
}



