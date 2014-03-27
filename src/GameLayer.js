var screenWidth =800;
var screenHeight = 600;
  
var GameLayer = cc.LayerColor.extend({

    init: function() {
        this._super( new cc.Color4B( 127, 127, 127, 255 ) );
        this.setPosition( new cc.Point( 0, 0 ) );
        this.player = new Player();
        this.player.setPosition( new cc.Point( screenWidth / 2, 0 ) );
        this.addChild( this.player,1 );
        this.player.scheduleUpdate();

        this.setKeyboardEnabled( true );
        this.state = GameLayer.STATES.FRONT;
        this.createNormalFloor();
        this.scheduleUpdate();
        return true;
    },

   onKeyDown: function( e ) {
    switch( e ) {
        case cc.KEY.left:
            this.player.Left();
            break;
        case cc.KEY.right:
            this.player.Right();
            break;
        }
    },
    onKeyUp: function( e ) {
    this.player.vx = 0;
    },
    createNormalFloor: function() {

        this.normalFloor = new NormalFloor();
        this.addChild( this.normalFloor );
        this.normalFloor.setPosition( new cc.Point( screenWidth / 2, 50 ) );
        this.normalFloor.getPlayer(this.player);
        this.normalFloor.scheduleUpdate();
    },
    update: function() {
    }

});
GameLayer.STATES = {
    FRONT: 1,
    STARTED: 2,
    DEAD: 3
};

var StartScene = cc.Scene.extend({
    onEnter: function() {
        this._super();
        var layer = new GameLayer();
        layer.init();
        this.addChild( layer );       
    }
});



