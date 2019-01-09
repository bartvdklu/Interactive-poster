var app = require('express')();
const express = require("express");
var http = require('http').Server(app);
var io = require('socket.io')(http);
var port = process.env.PORT || 8080;

http.listen(port);
    
app.use(express.static("public"));