var express = require('express');
var socket = require('socket.io');

//app setup

var app = express();
var server = app.listen(7000, function(){
    console.log("listening on port 7000")
});

//static files
app.use(express.static('public'));

//socket setup

var io = socket(server);

io.on('connection', function(socket){
    console.log("made socket connection", socket.id)

    socket.on('start', function(data){
        io.sockets.emit('start', data);
    });

    socket.on('changeTurn', function(data){
        io.sockets.emit('changeTurn', data);
    });

    socket.on('atakFunction', function(data){
        io.sockets.emit('atakFunction', data);
    });

    socket.on('moveFunction', function(data){
        io.sockets.emit('moveFunction', data);
    });

    socket.on('play', function(data){
        io.sockets.emit('play', data);
    });

    // socket.on('', function(data){
    //     io.sockets.emit('', data);
    // });

    
});