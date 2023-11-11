class Game{
    constructor(){
        this.startScreen = document.getElementById('game-intro');
        this.gameScreen = document.getElementById('game-screen');
        this.gameEndScreen = document.getElementById('game-end');
        this.player= new Player(
            this.gameScreen,
            0,
            0,
            0,
            0,
            './images/homer-character.png'
        );
        this.width = 1280;
        this.height = 720;
        this.obstacles = [];
        this.score = 0;
        this.lives = 3;
        this.gameIsOver = false;
    }
}

start() {

    this.gameScreen.style.width = `${this.width}px`;
    this.gameSceen.style.height = `${this.height}px`;
    this.startScreen.style.display = 'none';
    this.gameScreen.style.display = 'block';
    this.gameloop();
}

gameLoop(){
    if (this.gameIsOver === true){
        return;
    }
    this.update();
    window.requestAnimationFrame(()=> this.gameLoop())
}

update(){
    
}
/* 
 */