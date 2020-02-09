// create a new scene
let gameScene = new Phaser.Scene('Game');

// some parameters for our scene
gameScene.init = function () {

    this.gameW = this.sys.game.config.width;
    this.gameH = this.sys.game.config.height;



    /**** design of sprites ****/
    /*
    *   
    */

};

// executed once, after assets were loaded
gameScene.create = function () {

    // start tracking time
    /* this.timedEventStats = this.time.addEvent({
        delay: 1000,
        repeat: -1,
        callback: function () {
            // update stats (final implementation) - pass stats obj
            this.updateTime();
        },
        callbackScope: this
    }); */

    let cockpit = this.add.sprite(50, 150, 'cockpit').setOrigin(0, 0);
    // box.setFrame(this.hTensCur);
    let lc = this.add.sprite(0, 0, 'coin').setOrigin(0, 0);
    let lcf = this.add.sprite(50, 0, 'cote').setOrigin(0, 0);
    let cf = this.add.sprite(100, 0, 'cote').setOrigin(0, 0);
    let rcf = this.add.sprite(150, 0, 'cote').setOrigin(0, 0);
    let rc = this.add.sprite(200, 0, 'coin').setOrigin(0, 0);
    rc.flipX = true;
    
    //
    let lc2 = this.add.sprite(0, 50, 'cote').setOrigin(0, 0);
    //lc2.angle = 90;
    let lcf2 = this.add.sprite(50, 50, 'cote').setOrigin(0, 0);
    let cf2 = this.add.sprite(100, 50, 'cote').setOrigin(0, 0);
    let rcf2 = this.add.sprite(150, 50, 'cote').setOrigin(0, 0);
    let rc2 = this.add.sprite(200, 50, 'cote').setOrigin(0, 0);
    //rc2.angle = 90;

    this.car = this.add.container(350, 350, [cockpit, lc, lcf, cf, rcf, rc, lc2, lcf2, cf2, rcf2, rc2]);

    for (let i=1; i<this.car.list.length;i++){
        //car.list[i].setFrame(3);
    }

    this.keys = this.input.keyboard.addKeys("P");

};
gameScene.update = function (box) {
    if (this.keys.P.isDown) {
        //console.log ('here');
        this.car.y -= 5;
    }
}

// animate out
gameScene.depart = function (box, newTime) {
    let depart = this.tweens.add({
        targets: box,
        duration: 1500,
        x: box.dx,
        y: box.dy,
        paused: false,
        callbackScope: this,
        onComplete: function (tween, sprites) {
            box.setFrame(newTime);
            this.formatter(box);
            box.x = box.rx;
            box.y = box.ry;
            this.rentre(box);
        }
    }, this);
}
// animate back in
gameScene.rentre = function (box) {
    let rentre = this.tweens.add({
        targets: box,
        duration: 1500,
        x: box.ix,
        y: box.iy,
        paused: false,
        callbackScope: this
    }, this);
}

/******************* no code below here, doesn't run */