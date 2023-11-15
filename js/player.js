class Player {
    // file where we gonna take care of players functionality
    constructor(gameScreen, left, top, width, height, imgSrc){
        this.gameScreen = gameScreen;
        this.left = left;
        this.top = top;
        this.width = width;
        this.height = height;
        this.directionX = 0;
        this.directionY = 0;
        //using DOM to add our character Homer which is going to be child of gameScreen div
        this.element = document.createElement('img');
        this.element.src = imgSrc;
        this.element.style.position = 'absolute';
        this.element.style.width = `${width}px`;
        this.element.style.height = `${height}px`;
        this.element.style.top = `${top}px`;
        this.element.style.left = `${left}px`;
        this.gameScreen.appendChild(this.element);
    }

    move(){
        // Update player's position based on directionX and directionY
      this.left += this.directionX;
      this.top += this.directionY;

        //for the player not to get out of the left side game frame
        if (this.left < 10) {
          this.left = 10;
        }
  
        // for the player not to get out of the right side game frame
        if (this.left > this.gameScreen.offsetWidth - this.width - 10) {
          this.left = this.gameScreen.offsetWidth - this.width - 10;
        };

      // Update hommers' position on the screen
      this.updatePosition();
    }

    //updating position after changing position values with .move() method
    updatePosition(){
        this.element.style.left = `${this.left}px`;
        this.element.style.top = `${this.top}px`;
        console.log('player position', this.element.getBoundingClientRect())
    }

    //establish the conditions of collision
    didCollide(obstacle) {

      //.getBoundingCLientRect() method returns the elements size and its relative position on the screen
      const playerRect = this.element.getBoundingClientRect();
      const obstacleRect = obstacle.element.getBoundingClientRect();
  
      if (
        //when obstacle collides with the player from the players' right side
        playerRect.left < obstacleRect.right &&
        //when the obstacle collides with the player from the playerr' left side 
        playerRect.right > obstacleRect.left &&
        //when the obstacle collides with the player from the upper side of the player
        playerRect.bottom > obstacleRect.top
      ) {
        return true; // obstacle and player did collide if any of the statements inside the if conditional occurs
      } else {
        return false; // collision didn't occur
      }
    }
}