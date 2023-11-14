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
    }, 7500); 
      
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