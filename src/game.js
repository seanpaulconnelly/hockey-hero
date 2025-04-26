import Phaser from "phaser";

const config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  backgroundColor: "#1E90FF", // temporary rink color
  scene: {
    preload,
    create
  }
};

function preload () {
  // nothing yet
}

function create () {
  this.add.text(400,300,"Hockey Hero",{fontFamily:"Arial",fontSize:48,color:"#fff"}).setOrigin(0.5);
}

new Phaser.Game(config);