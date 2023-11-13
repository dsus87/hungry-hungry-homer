class Game {
    // code to be added
    constructor(){
        this.startScreen = document.getElementById('game-intro');
        this.gameScreen = document.getElementById('game-screen');
        this.gameEndScreen = document.getElementById('game-end');
        this.scoring= document.getElementById('scoring');
        this.gameContainer = document.getElementById('game-container');
        this.page = document.html;
        this.player = new Player(
            this.gameScreen,
            900,
            285,
            182.67,
            400,
            './images/homer-character.png'
        ); //  new Player()
        this.width = 1280;
        this.height = 720;
        this.obstacles = []; // new Obstacle()
        this.obstaclesDonut = [];    // new Obstacle()
        this.obstaclesRibWich = [];    // new Obstacle()
        this.obstaclesBeer = [];   
        this.obstaclesPomato = [];
        this.obstaclesBlinky = [];
     
        this.score = 0;
        this.lives = 3;
        this.gameIsOver = false;
    }

    start(){
        
        this.gameScreen.style.width = `${this.width}px`;
        this.gameScreen.style.height = `${this.height}px`;
        this.startScreen.style.display = 'none';
        this.gameScreen.style.display = 'block';
        this.gameLoop();
        this.scoring.style.position = '';
        this.scoring.style.marginRight = '50px'
        this.scoring.style.boxSizing = 'border box'
        // Homer starts at a specific position
        // Obstacles are going to be at a specific position as well
    }

    gameLoop(){
        // Right now, always this.gameIsOver === false
        if(this.gameIsOver === true){
            return;
        }


        console.log('gameLoop exec')
        this.updateHomer();
        this.update();// update the game

        this.didPlayerCollide(this.obstacles)
        this.didPlayerCollide(this.obstaclesBeer);
        this.didPlayerCollide(this.obstaclesDonut);
        this.didPlayerCollide(this.obstaclesRibWich);
        this.didPlayerCollide(this.obstaclesPomato);
        this.didPlayerCollide(this.obstaclesBlinky);

        // this.gameLoop()
        window.requestAnimationFrame(()=> this.gameLoop()); // used to improve/better manage the rate of frames for the game animation
    }


    updateHomer(){
        this.player.move();

    }    


    update(){  //move the player and update the obstacles can be seperated to 2 seperate functions
        for(let i= 0; i < this.obstacles.length; i++){
            const obstacle = this.obstacles[i];
            obstacle.move();
                    // Return the new position of the homer to update the game
        }
        // Return the new positions of the obstacles to update the game
      
        //for loop to update the movement of the sandwich
        for(let i= 0; i < this.obstaclesRibWich.length; i++){
            const obstacle = this.obstaclesRibWich[i];
                obstacle.move();}


        for(let i= 0; i < this.obstaclesBeer.length; i++){
            const obstacle = this.obstaclesBeer[i];
                obstacle.move();}
        
        for(let i= 0; i < this.obstaclesPomato.length; i++){
            const obstacle = this.obstaclesPomato[i];
                obstacle.move();}

        for(let i= 0; i < this.obstaclesBlinky.length; i++){
            const obstacle = this.obstaclesBlinky[i];
                obstacle.move();}

    // Create a new obstacle based on a random probability


    // control amount of obstacles on screen 

    let totalObstacles = this.obstacles.length + this.obstaclesRibWich.length +
        this.obstaclesBeer.length + this.obstaclesPomato.length +
        this.obstaclesBlinky.length;

    let  maxObstacles = 3;

    // increase difficulty
    setInterval(function() {
        maxObstacles  += 1; 
      }, 10000); 


    // when there is no other obstacles on the screen


    if (totalObstacles < maxObstacles){

        if (Math.random() > 0.89 && this.obstacles.length < 1) {
            this.obstacles.push(new Obstacle(this.gameScreen,"Donut")); 
        }
       // here we are calling donuts, similar logic for sandwich etc..
        if (Math.random() > 0.91 && this.obstacles.length < 1) {
            this.obstaclesRibWich.push (new Sandwich(this.gameScreen,"Ribwich")); 
        } 
        if (Math.random() > 0.93 && this.obstacles.length < 1) {
            this.obstaclesBeer.push (new Beer(this.gameScreen,"Beer")); 
        }
        if (Math.random() > 0.95 && this.obstacles.length < 1) {
            this.obstaclesPomato.push (new Pomato(this.gameScreen,"Pomato")); 
        }
        if (Math.random() > 0.97 && this.obstacles.length < 1) {
            this.obstaclesBlinky.push (new Blinky (this.gameScreen,"Blinky")); 
        }
    }

 



    }

    
// pass as argument the array
    didPlayerCollide(obstaclesArray) {
        
        for(let i= 0; i < obstaclesArray.length; i++){   
            const obstacle = obstaclesArray[i];
            console.log(obstacle)
       
            // If the player's car collides with an obstacle
                if (this.player.didCollide(obstacle)) {
                    // Remove the obstacle element from the DOM
                    obstacle.element.remove();
                    // Remove obstacle object from the array
                    obstaclesArray.splice(i, 1);
                    // Reduce player's lives by 1
                    if (obstacle.name === "Donut"){
                        this.score += 100;
                        soundDonut.play();
                        
                    }else if(obstacle.name === "Ribwich"){   // needs to be checked with the name
                        this.score += 150;
                        soundHam.play();

                    }else if(obstacle.name === "Beer"){
                        this.score += 200;
                        soundBeer.play();

                    }else if(obstacle.name === "Pomato"){
                        this.lives--;
                        soundPomatoJuice.play();

                    }else if (obstacle.name === "Blinky"){
                        this.lives = 0;
                        soundDeath.play();
                      
                    }

                    document.getElementById('lives').textContent = this.lives;
                    document.getElementById('score').textContent = this.score;
                    // Update the counter variable to account for the removed obstacle
                    i--;
                } 
            }

          // End the game
            if (this.lives <= 0) {
                this.endGame();
                audio.pause();
                
            }
    }


   // Interval to randomize falling objects



// control total objects on screen 






    // Create a new method responsible for ending the game
  endGame() {
    this.player.element.remove(); // remove the player car from the screen
    this.obstacles.forEach(obstacle => obstacle.element.remove()); // remove the obstacles from the screen
    this.gameIsOver = true; // cancel the execution of gameLoop()
    // Hide game screen
    this.gameScreen.style.display = "none";
    // Show end game screen
    this.gameEndScreen.style.display = "block";
    this.scoring.style.margin = '0px'
    this.scoring.style.padding = '0px'
  }
} 


