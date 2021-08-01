var canvas;
var gameState=0;
var playerCount
var database

var form,player,game;

function setup(){
  database = firebase.database();
  createCanvas(400,400);
  
  form=new Form()

}

function draw(){
 
  form.display();
  
}

