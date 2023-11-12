window.onload = function () {
    const startButton = document.getElementById("start-button");
    const restartButton = document.getElementById("restart-button");
    let game;
    

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
      

    setInterval(function() {
      movementSpeedLeft  -= 1.5; 
      movementSpeedRight += 1.5; 
    }, 10000); 
      
    }
  
    function restartGame() {
      location.reload();
    }
   
    function handleKeydown(event) {
      const key = event.key;
      const possibleKeystrokes = [
        "ArrowLeft",
        "ArrowRight",
      ];
       
      if (possibleKeystrokes.includes(key)) {
        event.preventDefault();
         
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
  
  
     window.addEventListener("keydown", handleKeydown);

  };

  
  // Music
  let audio = new Audio("./sound/intro-end-song.mp3");
  audio.volume = 0.1;

  let soundDonut = new Audio("./audio/mmm-donuts.wav");
  sound.volume = 0.2;

  let soundBeer = new Audio("./audio/mmm-beer.wav");
  sound.volume = 0.2;

  let soundHam = new Audio("./audio/mmm-ham.wav");
  sound.volume = 0.2;

  let soundDeath = new Audio("./audio/argh-death.wav");
  sound.volume = 0.2;

  let soundPomatoJuice = new Audio("./audio/doh.wav");
  sound.volume = 0.2;