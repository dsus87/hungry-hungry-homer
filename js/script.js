window.onload = function () {
    const startButton = document.getElementById("start-button");
    const restartButton = document.getElementById("restart-button");
    let game;
    
    //add click event listeners to the buttons for starting/restarting the game
    startButton.addEventListener("click", function () {
      startGame();
      audio.play();
      
    });

    restartButton.addEventListener("click", function () {
      restartGame();
    });

    let movementSpeedLeft = -1.5;
    let movementSpeedRight = 1.5;

   
    function startGame() {
      console.log("start game");
      game = new Game(); // create an instance of the Game class
      game.start(); // execute the start method
      
        //for giving some difficulty to the game, the players' speed is going to increase every 7.5 seconds
        setInterval(function() {
          movementSpeedLeft  -= 1.5; 
          movementSpeedRight += 1.5; 
        }, 7500); 
      
    }
  
    function restartGame() {
      //refresh the page which means the game restarts
      location.reload();
    }
   
      // setting interactions with the keybord, gonna use left and right arrows
    function handleKeydown(event) {
      const key = event.key;
      const possibleKeystrokes = [
        "ArrowLeft",
        "ArrowRight",
      ];
       
      if (possibleKeystrokes.includes(key)) {
        event.preventDefault(); //if the event does not take place -stroking a key- the pages' default action its not gonna happen
         
        switch (key) {
          case "ArrowLeft":
            game.player.directionX = movementSpeedLeft;
            break;
         case "ArrowRight":
            game.player.directionX = movementSpeedRight;
            break;
        }
      }
    }
    //adressing the window (our page or document let's say) and adding an event listener -which is stroking down a key- and telling it 
    //to run our handlekeydown function when it happens. Basically it's gonna check if the stroken key are the left/right arrows or not.
    // If so, players gonna change it's position.
    
     window.addEventListener("keydown", handleKeydown);

  };

  
  // Music
  let audio = new Audio("./sound/intro-end-song.mp3");
  audio.volume = 0.1;

  let soundDonut = new Audio("./sound/mmm-donuts.mp3");
  soundDonut.volume = 0.1;

  let soundBeer = new Audio("./sound/mmm-beer.mp3");
  soundBeer.volume = 0.1;

  let soundHam = new Audio("./sound/mmm-ham.mp3");
  soundHam.volume = 0.1;

  let soundDeath = new Audio("./sound/argh-death.mp3");
  soundDeath.volume = 0.1;

  let soundPomatoJuice = new Audio("./sound/doh.mp3");
  soundPomatoJuice.volume = 0.1;