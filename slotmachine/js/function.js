window.onload = function () {
    var theCanvas = document.getElementById('myCanvas');
    var ctx = theCanvas.getContext("2d");

    var slot = new Image();
    slot.src = "images/slotmachine.png";
    slot.onload = drawSlot;

  function drawSlot() {
      ctx.drawImage(slot, 0, 0, 380, 400);
  }

  var stage;
  stage = new createjs.Stage("myCanvas");
  function drawButtons() {
      spinButton = new createjs.Bitmap("images/spingreen.png");
      spinButton.x = 100;
      stage.addChild(spinButton);
      stage.update();

  }
}
