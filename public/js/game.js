

var config = {
  type: Phaser.AUTO,
  parent: 'phaser-example',
  width: 800,
  height: 600,
  physics: {
    default: 'arcade',
    arcade: {
      debug: false,
      gravity: { y: 0 }
    }
  },
  scene: {
    preload: preload,
    create: create,
    update: update
  }
};

var game = new Phaser.Game(config);
function preload() {

  this.load.image('background', 'assets/Background.png')
  this.load.image('ship', 'assets/BlueStrip.png');
  this.load.image('otherPlayer', 'assets/GreenStrip.png');
  this.load.image('star', 'assets/star_gold.png');

  // end of preload   
}

function create() {

var self  = this;
this.socket = io();
this.otherPlayers = this.physics.add.group();

this.socket.on('currentPlayers', function (players){
  Object.keys(players).forEach(function (id){
    if(players[id].playerId === self.socket.id){
      addPlayer(self, players[id]);
    } else {
      addOtherPlayers(self, players[id]);
    }
  });
});

// add ny spelare  
this.socket.on('newPlayer', function (playerInfo) {
  addOtherPlayers(self, playerInfo);
});

// ta bort spelare 
this.socket.on('deletePlayer', function (playerId){
  self.otherPlayers.getChildren().forEach(function (otherPlayers){
    if(playerId === otherPlayers.playerId){
      otherPlayers.destroy();
    }
  });
});

// att komma åt keyboard 
this.cursors = this.input.keyboard.createCursorKeys();
this.keys = this.input.keyboard.addKeys({
  W: Phaser.Input.Keyboard.KeyCodes.W,
  S: Phaser.Input.Keyboard.KeyCodes.S,
  A: Phaser.Input.Keyboard.KeyCodes.A,
  D: Phaser.Input.Keyboard.KeyCodes.D
});

// movement 
this.socket.on('playerMoved', function (playerInfo){
  self.otherPlayers.getChildren().forEach(function (otherPlayer) {
    if(playerInfo.playerId === otherPlayer.playerId){
        otherPlayer.setRotation(playerInfo.rotation);
        otherPlayer.setPosition(playerInfo.x, playerInfo.y);
    }
  });
});

//background
self.background = self.add.image(400,300, 'background')
self.background.setScale(1,0.75)

// text 
this.blueScoreText = this.add.text(16, 16, '', { fontSize: '50px', fill: '#0000FF'});
this.redScoreText = this.add.text(584, 16, '', { fontSize: '50px', fill: '#FF0000' });

// score update 
this.socket.on('scoreUpdate', function (scores) {
  self.blueScoreText.setText('Blue: ' + scores.blue);
  self.redScoreText.setText('Red: ' + scores.red);
});

// kärnor 
this.socket.on('starLocation', function (starLocation) {
  if (self.star) self.star.destroy();
  self.star = self.physics.add.image(starLocation.x, starLocation.y, 'star');
  self.physics.add.overlap(self.ship, self.star, function () {
    this.socket.emit('starCollected');
  }, null, self);
});

  // end of create
}

function update() {
  
  if (this.ship){

    var x = this.ship.x;
    var y = this.ship.y;
    var r = this.ship.rotation;
    if (this.ship.oldPosition && (x !== this.ship.oldPosition.x || y !== this.ship.oldPosition.y || r !== this.ship.oldPosition.rotation)) {
      this.socket.emit('playerMovement', { x: this.ship.x, y: this.ship.y, rotation: this.ship.rotation });
    }
  
    this.ship.oldPosition = {
      x: this.ship.x,
      y: this.ship.y,
      rotation: this.ship.rotation
    };

    if(this.cursors.left.isDown || this.keys.A.isDown){
      this.ship.setAngularVelocity(-150);
    } else if(this.cursors.right.isDown || this.keys.D.isDown){
      this.ship.setAngularVelocity(150);
    } else{
      this.ship.setAngularVelocity(0);
    }

    if(this.cursors.up.isDown || this.keys.W.isDown){
      this.physics.velocityFromRotation(this.ship.rotation + 1.5, -100, this.ship.body.acceleration);
    } else if(this.cursors.down.isDown || this.keys.S.isDown){
      this.physics.velocityFromRotation(this.ship.rotation + 1.5, 100, this.ship.body.acceleration);
    } else{
      this.ship.setAcceleration(0);
    }
      this.physics.world.wrap(this.ship, 5);
  } 

  // end of update
 }

function addPlayer(self, playerInfo){
  self.ship = self.physics.add.image(playerInfo.x, playerInfo.y, 'ship').setOrigin(0.5, 0.5).setDisplaySize(53,40);
  if(playerInfo.team === 'blue'){
    self.ship.setTint(0x0000ff);
  } else {
    self.ship.setTint(0xff0000);
  }
  self.ship.setDrag(100,100);
  self.ship.setAngularDrag(100);
  self.ship.setMaxVelocity(200);
 }

 function addOtherPlayers(self, playerInfo){
  const otherPlayers = self.add.sprite(playerInfo.x, playerInfo.y, 'otherPlayer').setOrigin(0.5, 0.5).setDisplaySize(53,40);
  if(playerInfo.team === 'blue'){
    otherPlayers.setTint(0x0000ff);
  } else {
    otherPlayers.setTint(0xff0000);
  }
  otherPlayers.playerId = playerInfo.playerId;
  self.otherPlayers.add(otherPlayers);
}
