function game() {
  rectMode(CENTER); //changes the rectMode to CENTER to allow the rectangles to align better with the circles
  checker(); //calls the checker function to evaluate if the dial values match the combination values
  victory(); //call the victory function to see if we've met the victory condition
}

function victory() {
  if (flags[0] == true && flags[1] == true && flags[2] == true) { //checks each position is a match
    background(66, 134, 244); //redraws the same background
    gameWon = true; //changes gameWon's value to true

    fill(0); //sets the text color to black
    textSize(64); //increases the font size to 64
    text("You win!", 200, 150); //displays a congratulatory message to the player!

    textSize(24); //decreases the text to 24
    text("Winning combination was: " + dials[0].v + dials[1].v + dials[2].v, 200, 200); //tells the player what the winning combination was

    fill(255); //changes the color to white
    rectMode(CORNER); //sets the rectMode to CORNER
    rect(100, 225, 200, 50); //creates a rectangle

    fill(0); //sets the color to black
    textSize(32); //increases the text size to 32
    text("Replay?", 200, 260); //Prompts the user to replay

    noLoop(); //stops draw() from looping
  }
}

function mouseClicked() {
  for (var i = 0; i < dials.length; i++) { //goes through all the dials in the array
    dials[i].turnDial(); //calls their turnDial() function
  }
}

function mousePressed() {
  if (gameWon == true) {//if the game is won
    if (mouseX >= 100 && mouseX <= 300 && mouseY >= 225 && mouseY <= 275) { //and the mouse is within the whole replay rectangle
      randomizer(); //creates a new random combination
      createDials(); //creates 3 new Dials
      loop(); //starts looping draw() again
    }
  }
}

function randomizer() {
  //this for loop creates 3 random numbers and stores it in the combination array
  for (let i = 0; i < 3; i++) {
    combination[i] = round(random(9)); //creates a random number and rounds it to the nearest whole number
  }
}

function createDials()
{
  //this for loop creates the circles that will be our dials
  for (let i = 0; i < 3; i++) {
    dials[i] = new Dial(((i + 1) * xPos), yPos, dSize, dSize); //creates the Dial objects using the constructor function
  }
}

function displayDial(i) {
  fill(0); //set the color to black
  textSize(32); //increase textSize to 32
  textAlign(CENTER); //align the text to the center coordinates
  text(dials[i].v, (i + 1.05) * 100, 205, 50, 50); //display the current value of a dial in the rectangle
}

function checker() {
  //This for loop will go through the combination and the locks arrays to compare their respective values
  for (let i = 0; i < dials.length; i++) {
    if (combination[i] == dials[i].v) { //if the values match
      flags[i] = true; //change the value to true
    } else { //otherwise
      flags[i] = false; //change the value to false
    }
  }

  //this for loop goes through the flags array and takes action dependent on the true/false values
  for (let i = 0; i < flags.length; i++) {
    if (flags[i] == true) { //if a position matches
      fill("green"); //set the color to green, this visually indicates a match
      rect((i + 1) * xPos, 200, 50, 50); //draw a rectangle
      displayDial(i); //displays the dials

    } else { //if the position does not match
      fill("red"); //change the color to red, this visually indicates no match
      rect((i + 1) * xPos, 200, 50, 50); //draw a rectangle
      displayDial(i);//displays the dials
    }

  }
}