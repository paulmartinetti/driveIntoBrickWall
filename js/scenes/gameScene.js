// create a new scene
let gameScene = new Phaser.Scene('Game');

// some parameters for our scene
gameScene.init = function () {

    this.gameW = this.sys.game.config.width;
    this.gameH = this.sys.game.config.height;

    this.carDA = [['lf','ff','ff','ff','rf'],
                ['l','ff','ff','ff','r'],
                ['l','ff','ff','ff','r'],
                ['l','bb','bb','bb','r'],
                ['l','bb','bb','bb','r'],
                ['lb','bb','bb','bb','rb']];

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

    // build car
    let carA = [];
    // depth 1
    let flw = this.add.sprite(-150,-100,'lw').setOrigin(0,0);
    let frw = this.add.sprite(75,-100,'rw').setOrigin(0,0);
    let blw = this.add.sprite(-150,50,'lw').setOrigin(0,0);
    let brw = this.add.sprite(75,50,'rw').setOrigin(0,0);
    // --> animate wheels
    carA.push(flw,frw,blw,brw);

    // set up car parts in 5x6 grid
    let step = 50;
    for (let i=0;i<this.carDA.length;i++){

        for (let j=0;j<this.carDA[i].length;j++){
            let t = this.carDA[i][j];
            let part = this.add.sprite(((j*step)-125),((i*step)-150),t).setOrigin(0,0).setInteractive().setDepth(5);
            // --> add collision listener
            carA.push(part);
        }

    }


    let cockpit = this.add.sprite(-75, -25, 'cockpit').setOrigin(0, 0);
    let head = this.add.sprite(-25, 25, 'head').setOrigin(0, 0);
    // --> add head animation
    carA.push(cockpit,head);
    
    // assemble car
    this.car = this.add.container(350, 350, carA);

    for (let i=1; i<this.car.list.length;i++){
        //car.list[i].setFrame(3);
    }

    this.keys = this.input.keyboard.addKeys("W,A,S,D");

};
gameScene.update = function (box) {
    if (this.keys.W.isDown) {
        //console.log ('here');
        this.car.y -= 5;
    }
    if (this.keys.S.isDown) {
        //console.log ('here');
        this.car.y += 5;
    }
    if (this.keys.A.isDown) {
        //console.log ('here');
        this.car.angle -= 2;
    }
    if (this.keys.D.isDown) {
        //console.log ('here');
        this.car.angle += 2;
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