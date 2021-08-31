var player, playerImg,playerImg2;
var box1,miniBox1,box2,miniBox2;
var box1Img,box2Img;
var bg,bgImg;
var title = 1;
var answer1=1;
var answer2 =1;
var question =1;
var score = 0
var restartVar, restartVarImg;




function preload(){
playerImg =loadImage("imgs/mouse3.0.png")
playerImg2 = loadImage("imgs/mouse2.01.png")
bgImg = loadImage("imgs/bg1.jpg")
box1Img = loadImage("imgs/tick1.png")
box2Img = loadImage("imgs/cross.png")
restartVarImg = loadImage("imgs/restart.png")
}

function setup(){


  player = createSprite(200, 200, 30,30);
  player.addImage(playerImg)
  player.scale=0.2;

  
  miniBox1 = createSprite(100,100,25,25);
  box1= createSprite(100,100,50,50);
  box1.addImage(box1Img)
  box1.scale=0.1
  
  miniBox2 = createSprite(300,100,25,25);
  box2= createSprite(300,100,50,50);
  box2.addImage(box2Img)
  box2.scale = 0.35

  restartVar = createSprite(1000,40,70,25)
  restartVar.addImage(restartVarImg)
  restartVar.scale = 0.1

fill("white")

}

function draw() {
  
  background(bgImg);

if(player.isTouching(restartVar)&&question===13){
  restart()
}

text ("score: "+score,300,50)

if(question<13){
  restartVar.x=1000;
text ("choose if this statement is true or not:",100,280)}

  if(question ===1){
    text("A lion's roar can be heard up to 8km away.",90,300);
  }
  if(question ===2){
    fill("green")
    text("correct",180,300)
    fill("white")
    text("Press Space for next question",120,320)
    if(keyDown("space")){
      score = score+1
      question=4
      player.x=200
    player.y=200
    player.addImage(playerImg)
    player.scale=0.2;
    
    }
  }
  if(question ===3){
    fill("red")
    text("incorrect",180,300)
    fill("white")
    text("Press Space for next question",120,320)
    if(keyDown("space")){
      question=4
    player.x=200
    player.y=200
    player.addImage(playerImg)
    player.scale=0.2;
  }
  }
  if(question ===4){
    text("pine trees aren't evergreen.",120,300);
  }

  if(question === 5){
    fill("red")
    text("incorrect",180,300)
    fill("white")
    text("Press Space for next question",120,320)
    if(keyDown("space")){
      question=7
    player.x=200
    player.y=200
    player.addImage(playerImg)
    player.scale=0.2;
  }
}

if(question ===6){
  fill("green")
  text("correct",180,300)
  fill("white")
    text("Press Space for next question",120,320)
    if(keyDown("space")){
      score = score+1
      question=7
      player.x=200
    player.y=200
    player.addImage(playerImg)
    player.scale=0.2;
}}

if(question ===7){
  text("mount kilimanjaro is smaller than mount fuji.",90,300);
}

if(question === 8){
  fill("red")
  text("incorrect",180,300)
  fill("white")
  text("Press Space for next question",120,320)
  if(keyDown("space")){
    question=10
  player.x=200
  player.y=200
  player.addImage(playerImg)
  player.scale=0.2;
}
}

if(question ===9){
  fill("green")
  text("correct",180,300)
  fill("white")
    text("Press Space for next question",120,320)
    if(keyDown("space")){
      score = score+1
      question=10
      player.x=200
    player.y=200
    player.addImage(playerImg)
    player.scale=0.2;
}}

if(question ===10){
  text("Lightning never strikes in the same place twice.",90,300);
}

if(question ===11){
  fill("green")
  text("correct",180,300)
  fill("white")
    text("Press Space to finish quiz",120,320)
    if(keyDown("space")){
      question=13
      score = score+1
      miniBox1.destroy();
      miniBox2.destroy();
      box1.destroy()
      box2.destroy()
      answer1=0
      answer2=0
      player.addImage(playerImg)
      player.scale=0.2;
      
}}

if(question === 12){
  fill("red")
  text("incorrect",180,300)
  fill("white")
  text("Press Space to finish quiz",120,320)
  if(keyDown("space")){
    question=13
    miniBox1.destroy();
      miniBox2.destroy();
      box1.destroy()
      box2.destroy()
      answer1=0
      answer2=0
      player.addImage(playerImg)
    player.scale=0.2;
      
   
}
}

if(question ===13){
  textSize(20)
  text("You have finished the quiz." ,70,200);
  text(" Congratulations you got "+score,75,240)
  text(" out of 4",150,280)

  restartVar.x=100;
  
 
}

  if(title === 1){
    textSize(25)
    text("TRIVIA",160,50)
  }

  if(answer1 ===1 ){
    fill("green")
    text("True",75,150)
  }

  if(answer2 ===1){
    fill("red")
    text("False",275,150)
  }

  if( keyDown("UP_ARROW")){
    player.y=player.y-2;
  }
  
  if(keyDown("DOWN_ARROW")){
    
   player.y=player.y+2 ;
  }
  
  if(keyDown("LEFT_ARROW")){
    player.x=player.x-2 ;
      
  }
  
  if(keyDown("RIGHT_ARROW")){
    player.x=player.x+2 ;
      
  }
        
  if(player.isTouching(miniBox1)&&question===1){
    player.scale=0.04;
    player.addImage(playerImg2)
    question = 2
  }
        
  if(player.isTouching(miniBox2)&&question===1){
    player.scale=0.04;
    player.addImage(playerImg2)
    question = 3
  }

  if(player.isTouching(miniBox1)&&question===4){
    player.scale=0.04;
    player.addImage(playerImg2)
    question = 5
  }
        
  if(player.isTouching(miniBox2)&&question===4){
    player.scale=0.04;
    player.addImage(playerImg2)
    question = 6
  }

  if(player.isTouching(miniBox1)&&question===7){
    player.scale=0.04;
    player.addImage(playerImg2)
    question = 8
  }
        
  if(player.isTouching(miniBox2)&&question===7){
    player.scale=0.04;
    player.addImage(playerImg2)
    question = 9
  }

  if(player.isTouching(miniBox1)&&question===10){
    player.scale=0.04;
    player.addImage(playerImg2)
    question = 11
  }
        
  if(player.isTouching(miniBox2)&&question===10){
    player.scale=0.04;
    player.addImage(playerImg2)
    question = 12
  }
   
        drawSprites();
        
}

function restart(){

  player.x=200
  player.y=200
  
  miniBox1 = createSprite(100,100,25,25);
  box1= createSprite(100,100,50,50);
  box1.addImage(box1Img)
  box1.scale=0.1
  
  miniBox2 = createSprite(300,100,25,25);
  box2= createSprite(300,100,50,50);
  box2.addImage(box2Img)
  box2.scale = 0.35

  question=1

  score=0

}