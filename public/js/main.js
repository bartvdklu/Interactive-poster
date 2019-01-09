// (function() {
//   document.onmousemove = handleMouseMove;
//   function handleMouseMove(event) {
//     var dot, eventDoc, doc, body, pageX, pageY;
//     var body = document.getElementById("body");

//     event = event || window.event; // IE-ism

//     // If pageX/Y aren't available and clientX/Y are,
//     // calculate pageX/Y - logic taken from jQuery.
//     // (This is to support old IE)
//     if (event.pageX == null && event.clientX != null) {
//       eventDoc = (event.target && event.target.ownerDocument) || document;
//       doc = eventDoc.documentElement;
//       body = eventDoc.body;

//       event.pageX =
//         event.clientX +
//         ((doc && doc.scrollLeft) || (body && body.scrollLeft) || 0) -
//         ((doc && doc.clientLeft) || (body && body.clientLeft) || 0);
//       event.pageY =
//         event.clientY +
//         ((doc && doc.scrollTop) || (body && body.scrollTop) || 0) -
//         ((doc && doc.clientTop) || (body && body.clientTop) || 0);
//     }

//     // Use event.pageX / event.pageY here
//     console.log("X : " + event.pageX);

//     if (event.pageX < 150) {
//       body.style.filter = "blur(20px)";
//     } else if (event.pageX < 300) {
//       body.style.filter = "blur(15px)";
//     } else if (event.pageX < 450) {
//       body.style.filter = "blur(10px)";
//     } else if (event.pageX < 600) {
//       body.style.filter = "blur(5px)";
//     } else if (event.pageX < 750) {
//       body.style.filter = "blur(2px)";
//       // } else if (event.pageX < 900) {
//       // body.style.filter = "blur(2px)";
//     } else if (event.pageX < 1150) {
//       body.style.filter = "blur(2px)";
//     } else if (event.pageX < 1300) {
//       body.style.filter = "blur(5px)";
//     } else if (event.pageX < 1550) {
//       body.style.filter = "blur(10px)";
//     } else if (event.pageX < 1700) {
//       body.style.filter = "blur(15px)";
//     } else if (event.pageX < 1850) {
//       body.style.filter = "blur(20px)";
//     }
//     if (event.pageX > 750 && event.pageX < 900) {
//       body.style.filter = "blur(0px)";
//     }
//   }
// })();
