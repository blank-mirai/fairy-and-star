const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var fairy, star, backG
var fairyImage, starImage;
var starBody;
var sound;
var engine, world;

function preload()
{
   fairyImage = loadAnimation("images/fairy1.png", "images/fairy2.png");
   starImage = loadImage("images/star.png");
   backG = loadImage("images/starnight.png");
   sound = loadSound("sound/JoyMusic.mp3");
}

function setup() {
  engine = Engine.create();
  world = engine.world;

  createCanvas(800, 750);
  
  fairy = createSprite(200, 550, 10, 10);
  fairy.addAnimation("flying fairy", fairyImage);
  fairy.scale = 0.25;

  star = createSprite(600, 100, 10, 10);
  star.addImage("star image", starImage);
  star.scale = 0.3;
  starBody = Bodies.circle(600, 100, 5, {restitution : 0.5, isStatic : true});
  World.add(world, starBody);

  sound.play();
}


function draw() {
  background(backG);
  Engine.update(engine);

  if(keyDown("left_arrow")){
    fairy.x = fairy.x - 5
  }

  if(keyDown("right_arrow")){
    fairy.x = fairy.x + 5
  }

  star.x = starBody.position.x;
  star.y = starBody.position.y;

  if(keyDown("down_arrow")){
    Matter.Body.setStatic(starBody, false);
  }

  if(star.y > 470 && starBody.position.y > 470){
    Matter.Body.setStatic(starBody, true);
  }

  drawSprites();
}
