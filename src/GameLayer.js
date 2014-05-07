var screenWidth =800;
var screenHeight = 100000;
  
var GameLayer = cc.LayerColor.extend({
    init: function() {
        this._super();
        var background = cc.Sprite.create('images/background.jpg');
        background.setAnchorPoint( cc.p( 0.5, 0.5 ));
        background.setPosition( cc.p( 500, 500) );
        this.addChild(background);

        this.setPosition( new cc.Point( 0, 0 ) );
        this.player = new Player();
        this.player.setPosition( new cc.Point( screenWidth / 2, 0 ) );
        this.addChild( this.player,2 );
        this.player.scheduleUpdate();

        this.setKeyboardEnabled( true );
        this.scroll = new scrollLayer();
        this.scroll.init(this.player);
        this.addChild(this.scroll,1);
        
        this.Score = cc.LabelTTF.create( '0', 'Arial', 40 );
        this.Score.setPosition( new cc.Point( 725, 900 ) );
        this.Score.setString( this.scroll.high );
        this.addChild(this.Score);

        this.scheduleUpdate();
        return true;
    },

    update: function(dt){
        this.Score.setString( Math.round(this.scroll.high) );
    },

   onKeyDown: function( e ) {
    switch( e ) {
        case cc.KEY.left:
            this.player.Left();
            break;
        case cc.KEY.right:
            this.player.Right();
            break;
        case 32:
            this.player.doubleJump();
            break;
        case 79:
            this.player.vy = 100;
            break;
        case 82:
            this.player.vy = 50;
            break;
        }
    },
    onKeyUp: function( e ) {
    	this.player.vx = 0;
    },
});

var StartScene = cc.Scene.extend({
    onEnter: function() {
        this._super();
        var layer = new GameLayer();
        layer.init();
        this.addChild( layer );
    }
});