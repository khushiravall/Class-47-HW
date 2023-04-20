var canvas;
var backgroundImage;
var trackImage, waterImage;
var gameObject;
var gameState;
var formObject;
var waterBottleImage;
var girl, boy; 
var girlAnimation, boyAnimation;
var girlAnimation1, boyAnimation1;
var allPlayers;
var trackImage;
var waterBottleGroup, powerCoinsGroup, carsGroup;

// var car1_img, car2_img, track;
// var fuelImage, powerCoinImage, lifeImage;
// var obstacle1Image, obstacle2Image;
//var database, gameState;
// var blastImage;
var playerCount, playerObject;
// var allPlayers, car1, car2, fuels, powerCoins, obstacles;
//var cars = [];
var humans = [];

function preload() {
  backgroundImage = loadImage("./assets/background.png");
  // car1_img = loadImage("../assets/car1.png");
  // car2_img = loadImage("../assets/car2.png");
  trackImage = loadImage("../assets/track.jpg");
  waterImage = loadImage("./assets/water.png");
  powerCoinImage = loadImage("./assets/goldCoin.png");
  obstacle1Image = loadImage("./assets/car1.png");
  obstacle2Image = loadImage("./assets/car2.png");
  lifeImage = loadImage("./assets/life.png");
  //blastImage = loadImage("./assets/blast.png");
  waterBottleImage = loadImage("./assets/water.png");
  boyAnimation = loadAnimation("./assets/1.png", "./assets/2.png", "./assets/3.png", "./assets/4.png", "./assets/5.png", "./assets/6.png", "./assets/8.png");
  girlAnimation = loadAnimation("./assets/g1.png", "./assets/g2.png", "./assets/g3.png", "./assets/g4.png", "./assets/g5.png", "./assets/g6.png", "./assets/g7.png", "./assets/g8.png");
  boyAnimation1 = loadAnimation("./assets/5.png");
  girlAnimation1 = loadAnimation("./assets/g5.png")
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  database = firebase.database();
  gameObject = new Game();
  gameObject.getState();
  gameObject.start()
  // game = new Game();
  // game.getState();
  // game.start();

  //gameObject is like game.
}

function draw() {
  background(backgroundImage);
    if (playerCount === 2) {
      gameObject.update(1); 
    }

  if (gameState === 1) {
    gameObject.play();
  }

  // if (gameState === 2) {
  //   game.showLeaderboard();
  //   gameObject.end();
  // }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
