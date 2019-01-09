var app = require('express')();
const express = require("express");
var http = require('http').Server(app);
var io = require('socket.io')(http);
var port = process.env.PORT || 8080;

http.listen(port);
    
app.use(express.static("public"));

var five = require('johnny-five'); 
var board = new five.Board();

board.on('ready',function(){
    var proximity = new five.Proximity({
        controller: "HCSR04",
        pin: 7
    });

    proximity.on("change", function() {
        io.emit('distance', this.in);
    });
});
