/*
Lock Picking Game
Created by Alex Cepeda, 10/3/2018
This is my final project for the Laguardia TechHire vestibule.
It is a game where the player will have to press the circle to "turn" the dials
and increase a number. If they match a randomly-generated combination, they win!
https://thecodeden.wordpress.com/2018/10/04/my-final-project
*/

var combination = []; //this array will hold the values that need to be matched
var dials = []; //this array will hold Dial objects
var flags = [false, false, false]; //this array represents if there is a match in a position

var xPos = 100; //sets the starting x-position to pass along to the different for loops
var yPos = 75; //sets the starting y-position to pass along to the different for loops
var dSize = 75; //sets the size for all the Dials
var gameWon = false; //boolean variable that changes value if the game winning conditions are are met

function setup() {
  createCanvas(400, 400); //creates a 400 x 400 canvas
  randomizer(); //calls the randomizer function to create a random number combination
  createDials(); //calls the createDials which creates Dials and populates them in the dials array

  print("The name of the game is to match a secret combination!");
  print("Click on a circle to increase its value. A green box means you've matched a value.");
}

function draw() {
  background(66, 134, 244); //sets the background

  for (let i = 0; i < dials.length; i++) {
    dials[i].display();
  } //displays the dials on the screen

  game(); //runs the game

}