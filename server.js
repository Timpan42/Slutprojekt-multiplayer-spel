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

io.on('connection', function (socket) {
  console.log('a user connected');
  var holdingBomb = false
  const colors = ['blue', 'green', 'pink', 'red', 'white'];

  // create a new player and add it to our players object
  players[socket.id] = {
    rotation: 0,
    x: Math.floor(Math.random() * 700) + 50,
    y: Math.floor(Math.random() * 500) + 50,
    playerId: socket.id,
    team: colors[Math.floor(Math.random() * colors.length)],
    holdBomb: holdingBomb
  };
  // send the players object to the new player
  socket.emit('currentPlayers', players);

  // send the bomb object to the new player
  socket.emit('bombLocation', bomb);

  // send the bomb to other players
  socket.emit('playerOverlap', players);

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
  socket.on('playerMovement', function (movementData) {
    players[socket.id].x = movementData.x;
    players[socket.id].y = movementData.y;
    players[socket.id].rotation = movementData.rotation;

    socket.broadcast.emit('playerMoved', players[socket.id]);

  });

  //när en spelare tar upp en bomb
  socket.on('bombCollected', function () {
    if (players[socket.id].team === 'blue') {
      scores.blue += 1;
      players[socket.id].holdBomb = true;
    } else if (players[socket.id].team === 'green') {
      scores.green += 1;
      players[socket.id].holdBomb = true;
    } else if (players[socket.id].team === 'pink') {
      scores.pink += 1;
      players[socket.id].holdBomb = true;
    } else if (players[socket.id].team === 'red') {
      scores.red += 1;
      players[socket.id].holdBomb = true;
    } else {
      scores.white += 1;
      players[socket.id].holdBomb = true;
    }
      
    io.emit('scoreUpdate', scores);
    
    // spelaren håller bomben
    if (players[socket.id].holdBomb === true) {
     bomb.x = players[socket.id].x
     bomb.y = players[socket.id].y

     // om spelaren far utanför skärmen 
     if(bomb.y <= -2){
      bomb.y = 560
    }
     if(bomb.y >= 602){
      bomb.y = 40
    }
     if(bomb.x <= -2){
      bomb.x = 760
    }
     if(bomb.x >= 802){
      bomb.x = 40
    }
    
    }

    if (players[socket.id].holdBomb === false) {
      bomb.x = Math.floor(Math.random() * 700) + 50;
      bomb.y = Math.floor(Math.random() * 500) + 50;
    }
    io.emit('bombLocation', bomb);
  });
});

/*socket.on('playersCollided', function () {
  if(players[socket.id].holdBomb === true){
      players[socket.id]
  } 

});*/




app.use(express.static(__dirname + '/public'));

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html');
});

server.listen(8081, function () {
  console.log(`Listening on ${server.address().port}`);
});



