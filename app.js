const express   = require('express');
const app       = express();
const http      = require('http');
const server    = require('http').createServer(app);  
const io        = require('socket.io')(server);

const LISTEN_PORT   = 8080;

server.listen(LISTEN_PORT);

//set root path of server
app.use(express.static(__dirname + '/public'));

console.log("Listening on port: " + LISTEN_PORT );

//our routes
app.get( '/', function( req, res ){ 
    res.sendFile( __dirname + '/public/index.html' );
});

app.get( '/p1', function( req, res ){ 
    res.sendFile( __dirname + '/public/player1.html' );
});

app.get( '/p2', function( req, res ){ 
    res.sendFile( __dirname + '/public/player2.html' );
});

app.get( '/win', function( req, res ){ 
    res.sendFile( __dirname + '/public/winner.html' );
});

app.get( '/lose', function( req, res ){ 
    res.sendFile( __dirname + '/public/loser.html' );
});

// socket.io stuff
io.on('connection', (socket) => {

    // user connections
    console.log( socket.id + " connected" );

    socket.on('disconnect', () => {
        console.log( socket.id + " disconnected" );
    });

    // user events
    socket.on("unlock-treasure", (data) => {
        console.log( "treasure event received" );
        io.sockets.emit("show_treasure");
    });

    socket.on("treasure-by-p1", (data) => {
        console.log( "P1 got the treasure" );
        io.sockets.emit("p1_win");
    });

    socket.on("treasure-by-p2", (data) => {
        console.log( "P2 got the treasure" );
        io.sockets.emit("p2_win");
    });

    socket.on("delete-key-1", (data) => {
        console.log( "key 1 removed" );
        io.sockets.emit("remove_key_1");
    });

    socket.on("delete-key-2", (data) => {
        console.log( "key 2 removed" );
        io.sockets.emit("remove_key_2");
    });

    socket.on("delete-key-3", (data) => {
        console.log( "key 3 removed" );
        io.sockets.emit("remove_key_3");
    });

    socket.on("delete-key-4", (data) => {
        console.log( "key 4 removed" );
        io.sockets.emit("remove_key_4");
    });

    socket.on("delete-key-5", (data) => {
        console.log( "key 5 removed" );
        io.sockets.emit("remove_key_5");
    });

});