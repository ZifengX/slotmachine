var stage;
var spinButton, resetButton, exitButton;
function init() {
    stage = new createjs.Stage(document.getElementById('myCanvas'));
    createjs.Ticker.addEventListener("tick", handleTick);
    createjs.Ticker.setFPS(60);
    start();
    exitButton.addEventListener("click", exitClick);
    resetButton.addEventListener("click", resetClick);
    spinButton.addEventListener("click", spinClick);
}


function handleTick(e) {
    stage.update();
}


function start() {
    drawMachine();
}

//click Exit button to close the window
function exitClick() {

    if(confirm("Do you want to close the window?") == true)
    {
        window.close();
        return true;
    }
    else
    {
        return false;
    }
    
}
//click reset button to reset the machine
function resetClick() {

    if (confirm("Do you want to close the window?") == true) {
        window.close();
        return true;
    }
    else {
        return false;
    }

}
//click spin button to start the game
function spinClick() {

    if (confirm("Do you want to close the window?") == true) {
        window.close();
        return true;
    }
    else {
        return false;
    }

}


    //draw the slot machine
function drawMachine() {
    
    //draw the machine
    slotMachine = new createjs.Bitmap("images/slotmachine.png");
    //draw the spin button
    spinButton = new createjs.Bitmap("images/spingreen.png");   
    spinButton.x = 300;
    spinButton.y = 315;
    //draw the reset button
    resetButton = new createjs.Bitmap("images/refresh.png");
    resetButton.x = 40;
    resetButton.y = 13;
    //draw the exit button
    exitButton = new createjs.Bitmap("images/exit.png");
    exitButton.x = 310;
    exitButton.y = 13;
    //draw the bets

    //draw the default symbols
    var defaultImg = "images/grapes.png";
    grape1 = new createjs.Bitmap(defaultImg);
    grape1.x = 60;
    grape1.y = 125;
    grape2 = new createjs.Bitmap(defaultImg);
    grape2.x = 165;
    grape2.y = 125;
    grape3 = new createjs.Bitmap(defaultImg);
    grape3.x = 270;
    grape3.y = 125;

    stage.addChild(slotMachine,spinButton,resetButton,exitButton,grape1,grape2,grape3);
    stage.update();
}

