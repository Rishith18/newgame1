var player, lifebarOutline, lifebar;

function setup() {
  createCanvas(800,800);
  player = createSprite(40,760,10,10);
  player.shapeColor = "black";

  lifebarOutline = createSprite(400,40,700,40);
  lifebarOutline.shapeColor = "black"
  lifebar = createSprite(400,40,690,30);
  lifebar.shapeColor = rgb(0, 186, 3);
}

function draw() {
  background(200,200,200);  

  playerMovement();


  drawSprites();
}

function playerMovement() {
  if (keyDown("w")) {
    player.y = player.y - 5;
  }
  if(keyDown("s")) {
    player.y = player.y + 5;
  }
  if(keyDown("d")) {
    player.x = player.x + 5;
  }
  if(keyDown("a")) {
    player.x = player.x - 5;
  }
}