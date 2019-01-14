
navigator.getUserMedia = navigator.getUserMedia ||
  navigator.webkitGetUserMedia ||
  navigator.mozGetUserMedia;
if (navigator.getUserMedia) {
  navigator.getUserMedia({
    audio: true
  },
    function (stream) {
      audioContext = new AudioContext();
      analyser = audioContext.createAnalyser();
      microphone = audioContext.createMediaStreamSource(stream);
      javascriptNode = audioContext.createScriptProcessor(2048, 1, 1);

      analyser.smoothingTimeConstant = 0.8;
      analyser.fftSize = 1024;

      microphone.connect(analyser);
      analyser.connect(javascriptNode);
      javascriptNode.connect(audioContext.destination);

      // canvasContext = $("#canvas")[0].getContext("2d");

      javascriptNode.onaudioprocess = function () {
        var array = new Uint8Array(analyser.frequencyBinCount);
        analyser.getByteFrequencyData(array);
        var values = 0;

        var length = array.length;
        for (var i = 0; i < length; i++) {
          values += (array[i]);
        }

        var average = values / length;

        console.log(Math.round(average));
        
        const logo = document.getElementById('logo');
        const datesLength = document.getElementById('dates').childNodes.length;
        const randomInt = Math.floor(Math.random() * datesLength);
        const dates = document.getElementById('dates').childNodes;
        
        if (average > 80) {
          logo.className = 'earthquake';
          dates[randomInt].className = "earthquake";
        } else if (average > 70) {
          logo.className = 'rumble3';
          dates[randomInt].className = "rumble3";
        } else if (average > 60) {
          logo.className = 'rumble2';
          dates[randomInt].className = "rumble2";
        } else if (average > 50) {
          logo.className = 'rumble';
          dates[randomInt].className = "rumble";
        } else {
          logo.className = '';
          dates[randomInt].className = '';
        }        

      } // end fn stream
    },
    function (err) {
      console.log("The following error occured: " + err.name)
    });
} else {
  console.log("getUserMedia not supported");
}


// function addClassToRandomElement(){
//   var Elements = document.getElementsByClassName('date');
//   var totalElements = Elements.length;
//   var randomNumber = Math.floor(Math.random() * totalElements ) + 1;
//   var randomElement = Elements[randomNumber];
//   randomElement.classList.addClass('earthquake');
// }