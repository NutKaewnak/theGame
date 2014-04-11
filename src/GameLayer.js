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
        this.createNormalFloor(new cc.Point( screenWidth / 2, 50 ));
        this.randomNormalFloor();
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
    createNormalFloor: function(point) {

        this.normalFloor = new NormalFloor(this.player);
        this.addChild(this.normalFloor);
        this.normalFloor.setPosition(point);
        this.normalFloor.scheduleUpdate();
    },
    randomNormalFloor: function() {
        this.createNormalFloor( new cc.Point( Math.random()*screenWidth, Math.random()*screenHeight*(2/3) ));
    }
});

var StartScene = cc.Scene.extend({
    onEnter: function() {
        this._super();
        var layer = new GameLayer();
        layer.init();
        this.addChild( layer );       
    }
});



