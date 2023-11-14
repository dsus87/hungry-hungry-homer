class Obstacle {
    constructor(gameScreen, name) {
      this.gameScreen = gameScreen;
      this.left = Math.floor(Math.random() * 1000 );
      this.top = 0; // Start above the screen
      this.width = 80;
      this.height = 80;
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
  
  
  
    updatePosition() {
      this.element.style.left = `${this.left}px`;
      this.element.style.top = `${this.top}px`;
      console.log('obstacle position', this.element.getBoundingClientRect());
    }
  
    move() {
      this.top += 1;
      this.updatePosition();
    }

  
  }
  
  
  //Extended class for Sandwich
  class Sandwich extends Obstacle {
    constructor(gameScreen, name) {
      super(gameScreen);
      this.element.src = 'images/ribwich.png';
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
      this.element.src = 'images/duff-beer.png';
      this.name = name;
    }

    move() {
      this.top += 1.5;
      this.updatePosition();
    }


  }
  

  //   // Extended class for Pomato-juice
  class Pomato extends Obstacle {
    constructor(gameScreen, name) {
      super(gameScreen);
      this.element.src = 'images/pomato-juice.png';
      this.name = name;
      
    }
    move() {
      this.top += 1.75;
      this.updatePosition();
    }


  }
    

  //     // Extended class for blinky 
  
  class Blinky extends Obstacle {
    constructor(gameScreen, name) {
      super(gameScreen);
      this.element.src = 'images/blinky.png';
      this.name = name;
    }
    move() {
      this.top += 1;
      this.updatePosition();
    }

  }
