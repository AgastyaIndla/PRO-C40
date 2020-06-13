const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers ;
var distance = 0;
var database;

var form, player, game;
var players,player1,player2,player3,player4;

function setup(){
  canvas = createCanvas(displayWidth-180,displayHeight-50);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){

  
  text("x:"+mouseX,50,50); 
  text("y:"+mouseY,50,70);
  
  if(playerCount===4){
    game.update(1);
  }
  if(gameState===1){
    clear();
    game.play();
  }
}
