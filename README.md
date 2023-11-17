Description
Hungry, Hungry Homer is a fun game where players aim to achieve the highest score by collecting Homer's favorite items: donuts, beer, and ribwitches. Each item awards a specific number of points. However, danger lurks in the form of Pomato juice and the infamous Blinky. Contact with Pomato juice costs Homer a life, while an encounter with Blinky results in an instant game-over. The player's final score is determined by the total items collected before Homer runs out of lives.
Main Functionalities

Automatic Movement: Homer moves continuously, with players controlling his direction using left and right clicks.

Point Collection: Homer earns points by colliding with donuts (100 points), beer (150 points), and ribwitches (200 points).

Life Mechanics: Contact with Pomato Juice deducts one life from Homer. A collision with Blinky results in a loss of all remaining lives.

Increasing difficulty: The game's difficulty escalates over time, with increases in both the speed and frequency of food items and obstacles. Every 5 seconds, the total number of obstacles on-screen increases.

Game End Condition: The game concludes when Homer's lives reach zero.
The game ends when homer has 0 lives

The game difficulty increases as the game progresses. This changes both the speed and frequency of food and obstacles.

Scoring System: The score is calculated based on the number of items collected and the duration of gameplay.

Technologies Used
HTML
CSS
JavaScript
DOM Manipulation
JS Classes
Local Storage??
JS Audio() and JS Image()


States
Start Screen
Game Screen
Game Over Screen


Project Structure
Game.js
Game();
this.startScreen;
this.gameScreen;
this.gameEndScreen;
this.scoring;
this.yourScore;
this.player;
this.width;
this.height;
this.obstacles;
this.obstaclesDonut;
this.obstaclesRibwich;
this.obstaclesBeer;
this.obstaclesPomato;
this.obstaclesBlinky;
this.score
this.lives;
this.gameIsOver
start();
gameLoop();
updateHomer();
update();
noCollision();
didPlayerCollide();
endGame();

Obstacle.js
Obstacle()
this.gameScreen;
this.left;
this.top;
this.width;
this.height;
this.element;
this.element.src;
this.element.style.position;
this.element.style.width;
this.element.style.height;
this.element.style.top;
this.element.style.left;
this.name;
this.gameScreen.appendChild(this.element);
updatePosition();
move();
Sandwich();
move();
Beer();
move();
Pomato();
move();
Blinky();
move();

Player.js
Player ()
this.gameScreen;
this.left;
this.top;
this.width;
this.height;
this.directionX;
this.directionY;
this.element;
this.element.src;
this.element.style.position;
this.element.style.width;
this.element.style.height;
this.element.style.top;
this.element.style.left;
this.name;
this.gameScreen.appendChild(this.element);
move();
updatePosition();
didCollide();


Script.js
startGame();
restartGame();
handleKeydown();
