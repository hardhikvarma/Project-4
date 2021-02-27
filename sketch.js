var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var form, player, game;

var bikes, bike1, bike2, bike3;

var track, bike1_img, bike2_img, bike3_img;
var dog, dogGroup, dog_img, dogs;

function preload(){
  track = loadImage("./images/track.jpg");
  bike1_img = loadImage("./images/bike1.jpg");
  bike2_img = loadImage("./images/bike1.jpg");
  bike3_img = loadImage("./images/bike1.jpg");
  dog_img = loadImage("./images/dog.png");
  ground = loadImage("./images/ground.png");
}

function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  if(playerCount === 3){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
  if(gameState === 2){
    game.end();
  }
}