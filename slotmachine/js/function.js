// varibles
var stage;
var spinButton, resetButton, exitButton, betButton1, betButton2, betButton3;
var jackpot = 5000, playerMoney = 1000, winnings = 0, playerBet = 0;
var grapes = 0;
var bananas = 0;
var oranges = 0;
var cherries = 0;
var bars = 0;
var bells = 0;
var sevens = 0;
var blanks = 0;

//activate when browser loads
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

//load methods when the window loads
function start() {
    drawMachine();
    defaultSymbols();
    playerStats();
}

//click Exit button to close the window
function exitClick() {

    if(confirm("Do you want to close the window?") == true)
    {
       // window.close();
       // window.open("about:blank", "_self").close()
        window.open('', '_self', '');
        window.close();
        return true;
    }
    else
    {
        return false;
    }
    
}

/* Utility function to reset the player stats */
function resetAll() {
    playerMoney = 1000;
    winnings = 0;
    jackpot = 5000;
    playerBet = 0;
}

/* Check to see if the player won the jackpot */
function checkJackPot() {
    /* compare two random values */
    var jackPotTry = Math.floor(Math.random() * 51 + 1);
    var jackPotWin = Math.floor(Math.random() * 51 + 1);
    if (jackPotTry == jackPotWin) {
        alert("You Won the $" + jackpot + " Jackpot!!");
        playerMoney += jackpot;
        jackpot = 1000;
    }
}

//click reset button to reset the machine
function resetClick() {
    if (confirm("Do you want to reset the game?") == true) {
        //remove current data
        stage.removeChild(text1, text2, text3, text4);

        //set to default data
        resetAll();
        stage.removeChild(grape1, grape2, grape3);
        defaultSymbols();
        playerStats();

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
    
    if (playerMoney == 0) {
        if (confirm("You ran out of Money! \nDo you want to play again?")) {
            resetAll();
            showPlayerStats();
        }
    }
    else if (playerBet == 0) {
        alert("All bets must be a positive $ amount.");
    }
    else if (playerBet > playerMoney) {
        alert("You don't have enough Money to place that bet.");
    }   
    else if (playerBet <= playerMoney) {
        stage.removeChild(text1, text2, text3, text4);
        loadImages();
        determineWinnings();
        playerStats();
    }
}

// reset all fruit tallies 
function resetFruitTally() {
    grapes = 0;
    bananas = 0;
    oranges = 0;
    cherries = 0;
    bars = 0;
    bells = 0;
    sevens = 0;
    blanks = 0;
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

    stage.addChild(slotMachine,spinButton,resetButton,exitButton,betButton1,betButton2,betButton3);
    stage.update();
}

//show player stats
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

/* Utility function to check if a value falls within a range of bounds */
function checkRange(value, lowerBounds, upperBounds) {
    if (value >= lowerBounds && value <= upperBounds) {
        return value;
    }
    else {
        return !value;
    }
}

/* When this function is called it determines the betLine results. */
function Reels() {
    var betLine = [" ", " ", " "];
    var outCome = [0, 0, 0];

    for (var spin = 0; spin < 3; spin++) {
        outCome[spin] = Math.floor((Math.random() * 65) + 1);
        switch (outCome[spin]) {
            case checkRange(outCome[spin], 1, 27):  // 41.5% probability
                betLine[spin] = "images/blank.png";
                blanks++;
                break;
            case checkRange(outCome[spin], 28, 37): // 15.4% probability
                betLine[spin] = "images/grapes.png";
                grapes++;
                break;
            case checkRange(outCome[spin], 38, 46): // 13.8% probability
                betLine[spin] = "images/bananas.png";
                bananas++;
                break;
            case checkRange(outCome[spin], 47, 54): // 12.3% probability
                betLine[spin] = "images/orange.png";
                oranges++;
                break;
            case checkRange(outCome[spin], 55, 59): //  7.7% probability
                betLine[spin] = "images/cherry.png";
                cherries++;
                break;
            case checkRange(outCome[spin], 60, 62): //  4.6% probability
                betLine[spin] = "images/bar.png";
                bars++;
                break;
            case checkRange(outCome[spin], 63, 64): //  3.1% probability
                betLine[spin] = "images/bell.png";
                bells++;
                break;
            case checkRange(outCome[spin], 65, 65): //  1.5% probability
                betLine[spin] = "images/seven.png";
                sevens++;
                break;
        }
    }
    return betLine;
}

/* This function calculates the player's winnings, if any */
function determineWinnings() {
    if (blanks == 0) {
        if (grapes == 3) {
            winnings = playerBet * 10;
        }
        else if (bananas == 3) {
            winnings = playerBet * 20;
        }
        else if (oranges == 3) {
            winnings = playerBet * 30;
        }
        else if (cherries == 3) {
            winnings = playerBet * 40;
        }
        else if (bars == 3) {
            winnings = playerBet * 50;
        }
        else if (bells == 3) {
            winnings = playerBet * 75;
        }
        else if (sevens == 3) {
            winnings = playerBet * 100;
        }
        else if (grapes == 2) {
            winnings = playerBet * 2;
        }
        else if (bananas == 2) {
            winnings = playerBet * 2;
        }
        else if (oranges == 2) {
            winnings = playerBet * 3;
        }
        else if (cherries == 2) {
            winnings = playerBet * 4;
        }
        else if (bars == 2) {
            winnings = playerBet * 5;
        }
        else if (bells == 2) {
            winnings = playerBet * 10;
        }
        else if (sevens == 2) {
            winnings = playerBet * 20;
        }
        else if (sevens == 1) {
            winnings = playerBet * 5;
        }
        else {
            winnings = playerBet * 1;
        }
        playerMoney += winnings;
        resetFruitTally();
        checkJackPot();
    }
    else {
        playerMoney -= playerBet;
        resetFruitTally();
    }

}

//draw the default symbols
function defaultSymbols() {
    
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

    stage.addChild(grape1, grape2, grape3);
    stage.update();
}

//load images
function loadImages() {
    stage.removeChild(grape1, grape2, grape3);
    spinResult = Reels();
   // fruits = spinResult[0] + " - " + spinResult[1] + " - " + spinResult[2];
    grape1 = new createjs.Bitmap(spinResult[0]);
    grape1.x = 60;
    grape1.y = 125;
    grape2 = new createjs.Bitmap(spinResult[1]);
    grape2.x = 165;
    grape2.y = 125;
    grape3 = new createjs.Bitmap(spinResult[2]);
    grape3.x = 270;
    grape3.y = 125;

    stage.addChild(grape1, grape2, grape3);
    stage.update();
}

