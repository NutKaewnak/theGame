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
        this.player = new Player(this);
        this.player.setPosition( new cc.Point( screenWidth / 2, 0 ) );
        this.addChild( this.player,2 );
        this.player.scheduleUpdate();

        this.setKeyboardEnabled( true );
        this.scroll = new scrollLayer();
        this.scroll.init(this.player);
        this.addChild(this.scroll);
        
        this.Score = cc.LabelTTF.create( '0', 'Arial', 40 );
        this.Score.setPosition( new cc.Point( 725, 900 ) );
        this.Score.setString( this.scroll.high );
        this.addChild(this.Score);

        this.Monsters = [];
        this.scheduleUpdate();
        return true;
    },
    GameOver: function(){
        /*var GameOver = new Gameover();
        GameOver.setPosition(400,500);
        this.addChild(GameOver,5);*/
        this.unscheduleUpdate();
    },

    update: function(dt){
        this.Score.setString( Math.round(this.scroll.high) );
        if (this.Monsters.length > 0)
            this.player.Shoot();

        if (Math.random()*1000 > 999-(this.player.high/1000) && this.Monsters.length<99){
            var ball = new Ball(this);
            this.addChild(ball);
            this.Monsters.push(ball);
        }
    },

    pShoot: function(point){
        var bullet = new Bullet(point,this);
        this.addChild(bullet,1);
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
        case 13:
            location.reload();
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