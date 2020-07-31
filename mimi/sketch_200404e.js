var groundimg = [];

var player = {x: 100, y: 100, px: 100, py: 100, size: 100, left: 'left', right: 'right', up: 'up', down: 'down', blank: 'blank', direction: 'direction',
    
    pos: function (a, b) {
      this.px = this.x;
      this.py = this.y;
      this.x = this.px + (a * this.size);
      this.y = this.py + (b * this.size);
    },
    
    cull: function () {
      ground.display();
    },
    
    display: function () {
      image(player.direction, this.x, this.y);
    },
};

var ground = {w: 100, h: 100, sand: 'ground', sandwithtree: 'groundwithtree', grass: 'grass',
   
    display: function () {
      background(255);
      for (let p = 0; p < 4; p++) {
      for (let q = 0; q < 4; q++) {
      image(groundimg[p][q], (p*this.w), (q*this.h));
      }
      }
    },
};

function setup () {

  createCanvas (1440,788);

  ground.sand = loadImage('assets/ground.png');
  ground.sandwithtree = loadImage('assets/ground2.png');
  ground.grass = loadImage('assets/ground3.png');
  
  groundimg[0] = [];
  groundimg[0][0] = ground.sand; groundimg[0][1] = ground.sand; groundimg[0][2] = ground.sand; groundimg[0][3] = ground.sand; groundimg[0][4] = ground.sand;
  
  groundimg[1] = [];
  groundimg[1][0] = ground.sand; groundimg[1][1] = ground.sand; groundimg[1][2] = ground.sand; groundimg[1][3] = ground.sand; groundimg[1][4] = ground.sand;
  
  groundimg[2] = [];
  groundimg[2][0] = ground.sand; groundimg[2][1] = ground.grass; groundimg[2][2] = ground.grass; groundimg[2][3] = ground.grass; groundimg[2][4] = ground.sand;
  
  groundimg[3] = [];
  groundimg[3][0] = ground.sandwithtree; groundimg[3][1] = ground.grass; groundimg[3][2] = ground.grass; groundimg[3][3] = ground.grass; groundimg[3][4] = ground.sand;
  
  groundimg[4] = [];
  groundimg[4][0] = ground.sand; groundimg[4][1] = ground.grass; groundimg[4][2] = ground.grass; groundimg[4][3] = ground.grass; groundimg[4][4] = ground.sand;
 
  player.left = loadImage('assets/left.png');
  player.right = loadImage('assets/right.png');
  player.up = loadImage('assets/up.png');
  player.down = loadImage('assets/down.png');


noLoop();
}

function draw() {
  image('assets/right.png', 64, 64);
}

function keyPressed() {
  if (keyCode == LEFT_ARROW) {
      player.pos(-1,0);
      player.direction = player.left;
  } else if (keyCode == RIGHT_ARROW) {
      player.pos(1,0);
      player.direction = player.right;
  } else if (keyCode == UP_ARROW) { 
      player.pos(0,-1);
      player.direction = player.up;
  } else if (keyCode == DOWN_ARROW) {
      player.pos(0,1);
      player.direction = player.down; 
  } 
  
  player.cull();
  player.display();
  
}
