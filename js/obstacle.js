class Obstacle {
    constructor(gameScreen) {
      this.gameScreen = gameScreen;
      this.left = Math.floor(Math.random() * 300 + 70);
      this.top = -this.height; // Start above the screen
      this.width = 75;
      this.height = 75;
      this.element = document.createElement('img');
  
      this.element.style.position = 'absolute';
      this.element.style.width = `${this.width}px`;
      this.element.style.height = `${this.height}px`;
      this.element.style.top = `${this.top}px`;
      this.element.style.left = `${this.left}px`;
  
      this.gameScreen.appendChild(this.element);
    }
  
    static shouldSpawn() {   // spawn generator, base, will be overidden  
      return true; //Static class methods are defined on the class itself. You cannot call a static method on an object, only on an object class.
    }
  
    updatePosition() {
      this.element.style.left = `${this.left}px`;
      this.element.style.top = `${this.top}px`;
      console.log('obstacle position', this.element.getBoundingClientRect());
    }
  
    move() {
      this.top += this.speed;
      this.updatePosition();
    }
  }
  
  // Extended class for Donut
  class Donut extends Obstacle {
    constructor(gameScreen) {
      super(gameScreen);
      this.points = 100;
      this.speed = 2;
      this.element.src = './images/donut-asset.png';
    }
  
    static shouldSpawn() {
      return Math.random() < 0.9; // 90% chance to spawn
    }

  }
  
  // Extended class for Sandwich
  class Sandwich extends Obstacle {
    constructor(gameScreen) {
      super(gameScreen);
      this.points = 150;
      this.speed = 3;
      this.element.src = 'images/ribwich.png';
    }
  
    static shouldSpawn() {
      // Sandwiches are less common than donuts
      return Math.random() < 0.6; // 60% chance to spawn
    }
  }
  
  // Extended class for Beer
  class Beer extends Obstacle {
    constructor(gameScreen) {
      super(gameScreen);
      this.points = 200;
      this.speed = 4;
      this.element.src = 'images/duff-beer.png';
    }
  
    static shouldSpawn() {
      return Math.random() < 0.3; // 30% chance to spawn    
    }
  }


    // Extended class for Pomato-juice
    class pomatoJuice extends Obstacle {
      constructor(gameScreen) {
        super(gameScreen);
        this.points = 0;
        this.speed = 3;
        this.element.src = './images/pomato-juice.png';
       //  this.lives = -1 ;   this needs to be handled somewhere else, peraps in Game or Script.js
      }
    
      static shouldSpawn() {
        return Math.random() < 0.9; // 90% chance to spawn
      }
    }

      // Extended class for blinky 
  
      class blinky extends Obstacle {
        constructor(gameScreen) {
          super(gameScreen);
          this.points = 0;
          this.speed = 3;
          this.element.src = './images/pomato-juice.png';
         //  this.lives = -1 ;   this needs to be handled somewhere else, peraps in Game or Script.js
        }
      
        static shouldSpawn() {
          return Math.random() < 0.9; // 90% chance to spawn
        }
      }
