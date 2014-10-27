window.onload = function () {
    var theCanvas = document.getElementById('myCanvas');
    var ctx = theCanvas.getContext("2d");

    var slot = new Image();
   slot.src = "img/slotmachine.png";
 slot.onload = drawSlot;

  function drawSlot() {
      ctx.drawImage(slot, 0, 0, 380, 400);
   }
}
