var screenWidth =800;
var screenHeight = 600;
var LastFloorHeigh = 0;
  
var GameLayer = cc.LayerColor.extend({
    init: function() {
        this._super();
        var background = cc.Sprite.create('images/story-fairy-space-mystic.jpg');
        background.setAnchorPoint( cc.p( 0.5, 0.5 ));
        background.setPosition( cc.p( 400, 300) );
        this.addChild(background);

        this.setPosition( new cc.Point( 0, 0 ) );
        this.player = new Player();
        this.player.setPosition( new cc.Point( screenWidth / 2, 0 ) );
        this.addChild( this.player,1 );
        this.player.scheduleUpdate();

        this.setKeyboardEnabled( true );
        this.scroll = new scrollLayer();
        this.scroll.init(this.player);
        this.addChild(this.scroll);

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
});

var StartScene = cc.Scene.extend({
    onEnter: function() {
        this._super();
        var layer = new GameLayer();
        layer.init();
        this.addChild( layer );
    }
});