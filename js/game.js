class Game {

    // gonna take care of setting elements taking role in the whole game process, screens, position update of player and obstacles,
    // setting changes according to our game dynamics

    constructor(){
        this.startScreen = document.getElementById('game-intro');
        this.gameScreen = document.getElementById('game-screen');
        this.gameEndScreen = document.getElementById('game-end');
        this.scoring= document.getElementById('scoring');
        this.yourScore =document.getElementById('your-score');
        this.player = new Player(
            this.gameScreen,
            1000, //left position
            325,  //top position
            205.5,  //players width
            450,    //players height
            './images/homer-character.png' //img src
        ); //  new Player()
        this.width = 1450; //games' width
        this.height = 825; // games' height
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
        //set width and height of the game screen, hide game intro to show gamescreen. 
        //scoring panel being shown too and positioning it
        this.gameScreen.style.width = `${this.width}px`;
        this.gameScreen.style.height = `${this.height}px`;
        this.startScreen.style.display = 'none';
        this.gameScreen.style.display = 'block';
        this.scoring.style.visibility = 'visible';
        this.scoring.style.position= 'absolute'
        this.scoring.style.margin= '10px 20px'
        this.gameLoop();
        // Homer starts at a specific position
        // Obstacles are going to be at a specific position as well
    }

    gameLoop(){
        //method taking place throughout the game, basically its going to check if object and player are colliding since the game is based on this dynamic
        // Right now, always this.gameIsOver === false
        if(this.gameIsOver === true){
            return;
        }


        console.log('gameLoop exec');
        this.updateHomer();// updating homer's position
        this.update();// update the game 

        this.didPlayerCollide(this.obstacles)
        this.didPlayerCollide(this.obstaclesBeer);
        this.didPlayerCollide(this.obstaclesDonut);
        this.didPlayerCollide(this.obstaclesRibWich);
        this.didPlayerCollide(this.obstaclesPomato);
        this.didPlayerCollide(this.obstaclesBlinky);

        window.requestAnimationFrame(()=> this.gameLoop()); // used to improve/better manage the rate of frames for the game animation
    }


    //move the player and update the obstacles can be seperated to 2 seperate functions

    updateHomer(){
        this.player.move();
    }    


    update(){  // Return the new positions of the obstacles to update the game


        for(let i= 0; i < this.obstacles.length; i++){
            const obstacle = this.obstacles[i];
            obstacle.move();  
        }

        for(let i= 0; i < this.obstaclesRibWich.length; i++){
            const obstacle = this.obstaclesRibWich[i];
                obstacle.move();
        }

        for(let i= 0; i < this.obstaclesBeer.length; i++){
            const obstacle = this.obstaclesBeer[i];
                obstacle.move();
        }
        
        for(let i= 0; i < this.obstaclesPomato.length; i++){
            const obstacle = this.obstaclesPomato[i];
                obstacle.move();
        }
        
        for(let i= 0; i < this.obstaclesBlinky.length; i++){
            const obstacle = this.obstaclesBlinky[i];
                obstacle.move(); 
        }


        // control amount of obstacles on screen 

        let totalObstacles = this.obstacles.length + this.obstaclesRibWich.length + this.obstaclesBeer.length + this.obstaclesPomato.length + his.obstaclesBlinky.length;
        let  maxObstacles = 5;

        // increase difficulty by increasing the maximum amount of obstacles on screen by one every 5s
        setInterval(function() {
         maxObstacles  += 1; 
        }, 5000); 


        if (totalObstacles < maxObstacles){

            if (Math.random() > 0.89) {
                this.obstacles.push(new Obstacle(this.gameScreen,"Donut")); 
            }
            
            if (Math.random() > 0.91) {
                this.obstaclesRibWich.push (new Sandwich(this.gameScreen,"Ribwich")); 
            } 
            if (Math.random() > 0.93) {
                this.obstaclesBeer.push (new Beer(this.gameScreen,"Beer")); 
            }
            if (Math.random() > 0.95) {
                this.obstaclesPomato.push (new Pomato(this.gameScreen,"Pomato")); 
            }
            if (Math.random() > 0.97) {
                this.obstaclesBlinky.push (new Blinky (this.gameScreen,"Blinky")); 
            }
        }
        
        // calling out the method that takes place when player and obstacle didn't collide for every single obstacle    
        this.noCollision(this.obstacles);
        this.noCollision(this.obstaclesRibWich);
        this.noCollision(this.obstaclesBeer);
        this.noCollision(this.obstaclesPomato);
        this.noCollision(this.obstaclesBlinky);

    }

    // setting new method for when the obstacle and player don't colide. When the object gets to the bottom of the gameScreen, 
    // the obstacle is eliminated from the DOM and from its type array so that it doesn't affect the maximum obstacles on screen, 
    // nor random creation interval probability logics

    noCollision(obstaclesArray) {
        for (let i = 0; i < obstaclesArray.length; i++) {
            if (obstaclesArray[i].top > this.gameScreen.offsetHeight - obstaclesArray[i].height - 10) {
                obstaclesArray[i].element.remove(); 
                obstaclesArray.splice(i, 1);
                i--;
            }
        }
    }

    
    // pass as argument the array
    didPlayerCollide(obstaclesArray) {
        
        for(let i= 0; i < obstaclesArray.length; i++){   
            const obstacle = obstaclesArray[i];
            console.log(obstacle);
       
            // If the player's collides with an obstacle
                if (this.player.didCollide(obstacle)) {
                    // Remove the obstacle element from the DOM
                    obstacle.element.remove();
                    // Remove obstacle object from the array
                    obstaclesArray.splice(i, 1);

                    // when collision occurs, set updates according to what obstacle is and play its respective audio
                    if (obstacle.name === "Donut"){
                        this.score += 100;
                        soundDonut.play();
                         
                    }else if(obstacle.name === "Ribwich"){   
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
            };

            // End the game and stop the music
            if (this.lives <= 0) {
                this.endGame();
                audio.pause();
            }
    }

    // Create a new method responsible for ending the game
    endGame() {
        this.player.element.remove(); // remove Homer from the screen
        this.obstacles.forEach(obstacle => obstacle.element.remove()); // remove the obstacles from the screen
        this.gameIsOver = true; // cancel the execution of gameLoop()
        // Hide game screen
        this.gameScreen.style.display = "none";
        // Show end game screen
        this.gameEndScreen.style.display = "block";
        // using DOM to add the score in the empty heading tag and styling it
        this.yourScore.innerHTML=`Your score ${this.score}`
        this.yourScore.style.color = '#FFF949';
        this.yourScore.style.padding = '30px 0px 10px 0px'
    }

}

