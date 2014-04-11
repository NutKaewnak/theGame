var Player = cc.Sprite.extend({
	ctor:function(){
		this._super();
		this.initWithFile('images/dot.png');
		var animation = new cc.Animation.create();
		animation.addSpriteFrameWithFile( 'images/dot1.png' );
		animation.addSpriteFrameWithFile( 'images/dot.png' );
		animation.addSpriteFrameWithFile( 'images/dot3.png' );
		animation.setDelayPerUnit( 0.2 );
		var movingAction = cc.Animate.create( animation );
		this.runAction( movingAction );
		this.vy = 15;
		this.vx = 0;
	},

	update: function( dt ) {
		if(this.vx<0){
    		this.vx--;
    	}
    	if(this.vx>0){
    		this.vx++;
    	}
    	var pos = this.getPosition();
	    this.setPosition( new cc.Point( pos.x + this.vx, pos.y + this.vy ) );
	    if (this.vy>-10)
	    	this.vy +=  Player.G;
    },
    jump: function() {
    	if(this.vy > 0) return ;
    	var pos = this.getPosition();
        this.vy = Player.JUMPING_VELOCITY;
        this.setPosition( new cc.Point( pos.x, pos.y + this.vy ) );
    },
    fall: function() {
		var pos = this.getPosition();
		var fallAction = cc.MoveTo.create( 0.5, new cc.Point( pos.x, 0 ) );
		this.runAction( fallAction );
    },
    Left: function(){
    	this.vx--;
    },
    Right: function(){
    	this.vx++;
    }
});
Player.G = -0.5;
Player.STARTING_VELOCITY = 15;
Player.JUMPING_VELOCITY = 15;