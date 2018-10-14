function Dial(xPos, yPos, diam) {
  this.x = xPos; //sets the x-coordinate of the dial
  this.y = yPos; //sets the y-coordinate of the dial
  this.d = diam; //sets the diameter of the circle
  this.r = (this.d / 2); //sets the radius of the circle
  this.v = 0; //sets the initial value of the dial

  this.turnDial = function() {
    //this block of code is credited to Dan Shiffman's concept for click-driven events
    //Please see this video for reference: https://youtu.be/DEHsr4XicN8
    
    let d = dist(this.x, this.y, mouseX, mouseY); //creates a variable to hold the distance between the mouse and current circle's center point
    if (d <= this.r) { //if that distance is less than or equal to the radius then
      if (this.v == 9) { //if the dial's value was 9
        this.v = 0; //reset it back to 0
      } else { //otherwise
        this.v++; //increases the value of this.v by 1
      }
    }
  }

  //this block of code displays the dials on the screen
  this.display = function() {
    fill(0); //sets the color to black
    ellipse(this.x, this.y, this.d, this.d); //draws the circle using the values passed in the constructor function
    
    fill(255); //sets the color to white
    ellipse(this.x, this.y, this.r, this.r); //draws another circle for artistic flair
  }

}