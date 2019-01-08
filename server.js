var app = require('express')();
var server = require('http').createServer(app);
var io = require('socket.io')(server);
var five = require('johnny-five');

io.on('connection', function(socket){
    console.log('got socket connection');

    socket.on('command', function(data){
        console.log('received command: ' + data);
        io.emit('', data);
    });

    socket.on('disconnect', function(){
        console.log('lost socket connection...');
    });
});

/* serves all the static files */
app.get(/^(.+)$/, function(req, res){ 
    console.log('static file request : ' + req.params);
    console.log('serving: ' +  __dirname + 'htmldocs' + req.params[0]);
    res.sendFile( __dirname + '/htmldocs' + req.params[0]); 
});

server.listen(3000);