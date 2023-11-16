class Obstacle { // class for the obstacles, starting with the donut and extending it for the rest of obstacles
  // gonna take care of obstacles position and motion in this file
    constructor(gameScreen, name) {
      this.gameScreen = gameScreen;
      this.left = Math.floor(Math.random() * 1000); // for setting the space the obstcales are gonna take from the screen to start falling since it's not gonna be the xhole gameScreen
      this.top = 0; // Start above the screen
      this.width = 90;
      this.height = 90;
      //using DOM to add our obstacle and appending it as the child of gameScreen as it had no elements in it
      this.element = document.createElement('img');
      this.element.src = './images/donut-asset.png';
      this.element.style.position = 'absolute';
      this.element.style.width = `${this.width}px`;
      this.element.style.height = `${this.height}px`;
      this.element.style.top = `${this.top}px`;
      this.element.style.left = `${this.left}px`;
      this.name = name;
      this.gameScreen.appendChild(this.element);
    }
  
    // setting method for updating obstacles' position 
    updatePosition() {
      this.element.style.left = `${this.left}px`;
      this.element.style.top = `${this.top}px`;
      console.log('obstacle position', this.element.getBoundingClientRect());
    }
    
    //motion method where it changes its position vertically and then calling out the position update method 
    //since theres a new vertical position
    move() {
      this.top += 1;
      this.updatePosition();
    }

  
  }
  
  //Extended class for Sandwich
  class Sandwich extends Obstacle {
    constructor(gameScreen, name) {
      super(gameScreen);
      this.element.src = './images/ribwich.png';
      this.name = name;
    }

    move() {
      this.top += 1.25;
      this.updatePosition();
    }

  }
  
  // Extended class for Beer
  class Beer extends Obstacle {
    constructor(gameScreen, name) {
      super(gameScreen);
      this.element.src = './images/duff-beer.png';
      this.name = name;
    }

    move() {
      this.top += 1.5;
      this.updatePosition();
    }

  }
  

  // Extended class for Pomato-juice
  class Pomato extends Obstacle {
    constructor(gameScreen, name) {
      super(gameScreen);
      this.element.src = './images/pomato-juice.png';
      this.name = name;
      
    }

    move() {
      this.top += 1.75;
      this.updatePosition();
    }

  }
    

  // Extended class for blinky 
  class Blinky extends Obstacle {
    constructor(gameScreen, name) {
      super(gameScreen);
      this.element.src = './images/blinky.png';
      this.name = name;
    }
    move() {
      this.top += 1;
      this.updatePosition();
    }

  }
