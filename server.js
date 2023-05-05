var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);
var players = {};
var bomb = {
  x: Math.floor(Math.random() * 700) + 50,
  y: Math.floor(Math.random() * 500) + 50
};
var scores = {
  blue: 0,
  green: 0,
  pink: 0,
  red: 0,
  white: 0  
};
var holdingBomb = false
var color = "";

io.on('connection', function (socket) {
  console.log('a user connected');

  // create a new player and add it to our players object
  players[socket.id] = {
    rotation: 0,
    x: Math.floor(Math.random() * 700) + 50,
    y: Math.floor(Math.random() * 500) + 50,
    playerId: socket.id,
    team: (Math.floor(Math.random() * 2) == 0) ? 'red' : 'blue',
    holdBomb: holdingBomb
  };
  // send the players object to the new player
  socket.emit('currentPlayers', players);
  
  // send the bomb object to the new player
  socket.emit('bombLocation',bomb);
  
  // send the current scores
  socket.emit('scoreUpdate', scores);
  
  // update all other players of the new player
  socket.broadcast.emit('newPlayer', players[socket.id]);

  socket.on('disconnect', function () {
    console.log('user disconnected');
    // remove this player from our players object
    delete players[socket.id];
    // Broadcast to remove player that disconnect  
    socket.broadcast.emit('deletePlayer', socket.id);

  
  });
  socket.on('playerMovement', function(movementData){
    players[socket.id].x = movementData.x;
    players[socket.id].y = movementData.y;
    players[socket.id].rotation = movementData.rotation;

    socket.broadcast.emit('playerMoved', players[socket.id]);

  });

  //när en spelare tar upp en bomb
  socket.on('bombCollected', function () {
    if (players[socket.id].team === 'blue') {
      scores.blue += 10;
    } else if (players[socket.id].team === 'green') {
      scores.green += 10;
    } else if (players[socket.id].team === 'pink') {
      scores.pink += 10;
    } else if (players[socket.id].team === 'red') {
      scores.red += 10;
    } else {
      scores.white += 10;
    }
    bomb.x = Math.floor(Math.random() * 700) + 50;
    bomb.y = Math.floor(Math.random() * 500) + 50;
    io.emit('bombLocation', bomb);
    io.emit('scoreUpdate', scores);
  });
  
});



app.use(express.static(__dirname + '/public'));

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html');
});

server.listen(8081, function () {
  console.log(`Listening on ${server.address().port}`);
});



