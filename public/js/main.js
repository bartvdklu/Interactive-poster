(function() {
    const background = document.getElementById("background");
    const socket = io();
    const treshhold = 32;
    const double_treshhold = treshhold * 2;
    
    socket.on('distance', function(data) {
      if (!(data > 75)) {
        console.log('distance: ' + data);
        if (data >= treshhold) {
          let blur_amount = (data - treshhold) / 5;
          background.style.filter = "blur(" + blur_amount + "px)";
        } else if (data < treshhold) {
          background.style.filter = "blur(0px)";
        }
      }
    });
  
})();

// if (data >= treshhold) {
//   let blur_amount = (data - treshhold) / 2;
//   background.style.filter = "blur(" + blur_amount + "px)";
// } else if (data < treshhold) {
//   background.style.filter = "blur(0px)";
// }