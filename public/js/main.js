(function() {
    var body = document.getElementById("background");
    var socket = io();
    
    socket.on('distance', function(data) {
      // console.log('distance: ' + data);
      if (data > 150) {
        body.style.filter = "blur(15px)";
      } else if (data > 120) {
        body.style.filter = "blur(10px)";
      } else if (data > 100) {
        body.style.filter = "blur(5px)";
      } else if (data >= 80) {
        body.style.filter = "blur(2px)";
      } else if (data < 80) {
        body.style.filter = "blur(0px)";
      }
    });
  
})();
