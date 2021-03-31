var player;
var enemy1,enemy2,enemy3,enemy4,enemy5;
var enemyLaserG;
var enemyImg, heroImg, bgImg, bossImg;

function preload(){
 enemyImg = loadImage("Images/Enemy.png");
 heroImg = loadImage("Images/Hero.png");
 bgImg = loadImage("Images/Background.jpg");
 bossImg = loadImage("Images/Boss.png");

}

function setup() {
  createCanvas(1255,555);

  player = new Player();

  enemy1 = new Enemy(1255,50);
  enemy2 = new Enemy(1255,150);
  enemy3 = new Enemy(1255,250);
  enemy4 = new Enemy(1255,350);
  enemy5 = new Enemy(1255,450);

  enemyLaserG = new Group();
}

function draw() {
  background(0);  
  if(player.health>0){
    fill("green");
    rect(20,20,player.health,10);
  }


  player.move();
  player.shoot();
  player.destroy();
 
  enemy1.shoot();
  enemy1.move();
  enemy2.shoot();
  enemy2.move();
  enemy3.shoot();
  enemy3.move();
  enemy4.shoot();
  enemy4.move();
  enemy5.shoot();
  enemy5.move();

  drawSprites();
}