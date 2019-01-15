var lFollowX = 0,
    lFollowY = 0,
    x = 0,
    y = 0,
    friction = 1 / 30;

function moveBackground() {
  x += (lFollowX - x) * friction;
  y += (lFollowY - y) * friction;
  
  translate = 'translate(' + x / 2+ 'px, ' + y / 2 + 'px)';
  translateNegative = 'translate(' + -x + 'px, ' + -y + 'px) scale(1.1)';

  $('#background').css({
    '-webit-transform': translateNegative,
    '-moz-transform': translateNegative,
    'transform': translateNegative
  });

  $('#foreground').css({
    '-webit-transform': translate,
    '-moz-transform': translate,
    'transform': translate
  });

  window.requestAnimationFrame(moveBackground);
}

$(window).on('mousemove click', function(e) {

  var lMouseX = Math.max(-100, Math.min(100, $(window).width() / 2 - e.clientX));
  var lMouseY = Math.max(-100, Math.min(100, $(window).height() / 2 - e.clientY));
  lFollowX = (20 * lMouseX) / 100; // 100 : 12 = lMouxeX : lFollow
  lFollowY = (10 * lMouseY) / 100;

});

moveBackground();

// (function() {
//     const background = document.getElementById("background");
//     const socket = io();
//     const treshhold = 32;
//     const double_treshhold = treshhold * 2;
    
//     socket.on('distance', function(data) {
//       if (!(data > 75)) {
//         console.log('distance: ' + data);
//         if (data >= treshhold) {
//           let blur_amount = (data - treshhold) / 5;
//           background.style.filter = "blur(" + blur_amount + "px)";
//         } else if (data < treshhold) {
//           background.style.filter = "blur(0px)";
//         }
//       }
//     });
  
// })();