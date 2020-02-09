// create a new scene
let loadingScene = new Phaser.Scene('Loading');

// preload
// load asset files for our game
// ALL scenes have access to these objects!
loadingScene.preload = function () {
    
    // 
    let gameW = this.sys.game.config.width;
    let gameH = this.sys.game.config.height;

    // loaded in bootScene
    //let logo = this.add.sprite(gameW / 2, 250, 'logo');

    // progress bar bg
    let bgBar = this.add.graphics();
    let barW = 150;
    let barH = 30;

    // for graphics objs, the default origin is top-left
    bgBar.setPosition(gameW / 2 - barW / 2, gameH / 2 - barH / 2);
    // color, alpha (0-1)
    bgBar.fillStyle(0xF5F5F5,1);
    bgBar.fillRect(0,0,barW,barH);

    // progress bar
    let progressBar = this.add.graphics();
    progressBar.setPosition(gameW / 2 - barW / 2, gameH / 2 - barH / 2);

    // listen to progress event
    // value = 0-1 of loaded
    this.load.on('progress',function(value){

        // clear the bar so we can draw it again
        progressBar.clear();

        // set style
        progressBar.fillStyle(0x9AD98D);

        // draw with updated 'value'
        progressBar.fillRect(0, 0, (barW*value), barH);

    },this);
    
    // LOAD ASSETS
    this.load.image('bg', 'assets/bg1200x1200.png');

    this.load.image('cockpit', 'assets/cockpit.png');

    this.load.image('head','assets/head.png');

    this.load.image('wall','assets/wall.png');

    // eight car pieces
    let carA = ['l','ff','lb','lf','r','rb','rf','bb'];
    for (let i=0;i<carA.length;i++){
        let t = carA[i];
        this.load.spritesheet(t,'assets/'+t+'.png', {
            frameWidth: 50,
            frameHeight: 50,
            startFrame: 0,
            endFrame: 4,
            margin: 1,
            spacing: 1,
        });
    }
    

    // roues
    this.load.spritesheet('lw','assets/lw.png', {
        frameWidth: 75,
        frameHeight: 50,
        startFrame: 0,
        endFrame: 2,
        margin: 1,
        spacing: 1,
    });
    this.load.spritesheet('rw','assets/rw.png', {
        frameWidth: 75,
        frameHeight: 50,
        startFrame: 0,
        endFrame: 2,
        margin: 1,
        spacing: 1,
    });
};

loadingScene.create = function () {

    // animation of spritesheet - animations are global (available in multiple scenes)
    // to loop forever, repeat: -1
    // key name is arbitrary
    /* this.anims.create({
        key: 'funnyfaces',
        frames: this.anims.generateFrameNames('pet', { frames: [1, 2, 3] }),
        frameRate: 7,
        yoyo: true,
        repeat: 0
    }); */

    // 

    // ready to offer game
    this.scene.start('Home');

};