var stage;
var spinButton, resetButton, exitButton;
function init() {
    stage = new createjs.Stage(document.getElementById('myCanvas'));
    createjs.Ticker.addEventListener("tick", handleTick);
    createjs.Ticker.setFPS(60);
    start();
    exitButton.addEventListener("click", exitClick);
}


function handleTick(e) {
    stage.update();
}


function start() {
    drawMachine();
}

function exitClick() {
    window.close();
}

function drawMachine() {
    //var imgPath = "images/bananas.png";
    slotMachine = new createjs.Bitmap("images/slotmachine.png");
    spinButton = new createjs.Bitmap("images/spingreen.png");   
    spinButton.x = 300;
    spinButton.y = 315;

    resetButton = new createjs.Bitmap("images/refresh.png");
    resetButton.x = 40;
    resetButton.y = 13;

    exitButton = new createjs.Bitmap("images/exit.png");
    exitButton.x = 310;
    exitButton.y = 13;

    stage.addChild(slotMachine,spinButton,resetButton,exitButton);
    stage.update();
}

