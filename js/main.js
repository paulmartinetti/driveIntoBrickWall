
// our game's configuration
// backgroundColor - game only
// original reduced height by 100 (from 1136)

let config = {
  type: Phaser.AUTO,
  width: 1200,
  height: 1200,
  scene: [bootScene, loadingScene, homeScene, gameScene],
  title: 'driveIntoBrickWall',
  pixelArt: false,
  backgroundColor: '555555'
};


// create the game, and pass it the configuration
let game = new Phaser.Game(config);
