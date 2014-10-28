var stage;
var spinButton, resetButton, exitButton, betButton1, betButton2, betButton3;
var jackpot = 5000, playerMoney = 1000, winnings = 0, playerBet = 0;
function init() {
    stage = new createjs.Stage(document.getElementById('myCanvas'));
    createjs.Ticker.addEventListener("tick", handleTick);
    createjs.Ticker.setFPS(60);
    start();
    exitButton.addEventListener("click", exitClick);
    resetButton.addEventListener("click", resetClick);
    spinButton.addEventListener("click", spinClick);
    betButton1.addEventListener("click", betButton1Click);
    betButton2.addEventListener("click", betButton2Click);
    betButton3.addEventListener("click", betButton3Click);
}


function handleTick(e) {
    stage.update();
}


function start() {
    drawMachine();
    playerStats()
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
    if (confirm("Do you want to reset the game?") == true) {
        //remove current data
        stage.removeChild(text1, text2, text3, text4);

        //set to default data
        jackpot = 5000;
        playerMoney = 1000;
        winnings = 0;
        playerBet = 0;

        //jackpot 
        text1 = new createjs.Text(jackpot, "25px Arial", "#ff7700");
        text1.x = 65;
        text1.y = 233;

        //playerMoney
        text2 = new createjs.Text(playerMoney, "25px Arial", "#ff7700");
        text2.x = 160;
        text2.y = 233;

        //winnings
        text3 = new createjs.Text(playerBet, "25px Arial", "#ff7700");
        text3.x = 250;
        text3.y = 233;

        //player bet
        text4 = new createjs.Text(winnings, "25px Arial", "#ff7700");
        text4.x = 320;
        text4.y = 233;

        stage.addChild(text1, text2, text3, text4);
        stage.update();

        return true;
    }
    else {
        return false;
    }

}

//when click bet 10, set palyer bet to 10
function betButton1Click() {
    stage.removeChild(text3);

    playerBet = 10;

    //new player bet
    text3 = new createjs.Text(playerBet, "25px Arial", "#ff7700");
    text3.x = 250;
    text3.y = 233;

    stage.addChild(text3);
    stage.update();
}
// when click bet 25, set player bet to 25
function betButton2Click() {
    stage.removeChild(text3);

    playerBet = 25;

    //new player bet
    text3 = new createjs.Text(playerBet, "25px Arial", "#ff7700");
    text3.x = 250;
    text3.y = 233;

    stage.addChild(text3);
    stage.update();
}
//when click bet 50, set player bet to 50
function betButton3Click() {
    stage.removeChild(text3);

    playerBet = 50;

    //new player bet
    text3 = new createjs.Text(playerBet, "25px Arial", "#ff7700");
    text3.x = 250;
    text3.y = 233;

    stage.addChild(text3);
    stage.update();
}

//click spin button to start the game
function spinClick() {
    stage.removeChild(text1, text2, text3, text4);


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

    //draw bet button
    betButton1 = new createjs.Bitmap("images/bet10.png");
    betButton1.x = 50;
    betButton1.y = 316;
    betButton2 = new createjs.Bitmap("images/bet25.png");
    betButton2.x = 120;
    betButton2.y = 316;
    betButton3 = new createjs.Bitmap("images/bet50.png");
    betButton3.x = 190;
    betButton3.y = 316;

    stage.addChild(slotMachine,spinButton,resetButton,exitButton,grape1,grape2,grape3,betButton1,betButton2,betButton3);
    stage.update();
}

function playerStats() {
    //jackpot 
    text1 = new createjs.Text(jackpot, "25px Arial", "#ff7700");
    text1.x = 65;
    text1.y = 233;

    //playerMoney
    text2 = new createjs.Text(playerMoney, "25px Arial", "#ff7700");
    text2.x = 160;
    text2.y = 233;

    //player bet
    text3 = new createjs.Text(playerBet, "25px Arial", "#ff7700");
    text3.x = 250;
    text3.y = 233;

    //winnings
    text4 = new createjs.Text(winnings, "25px Arial", "#ff7700");
    text4.x = 320;
    text4.y = 233;


    stage.addChild(text1,text2,text3,text4);
    stage.update();
}
