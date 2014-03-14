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
		this.started = true;
	},

	update: function( dt ) {
		if(this.started){
	        var pos = this.getPosition();
	        this.setPosition( new cc.Point( pos.x + this.vx, pos.y + this.vy ) );
	        this.vy +=  -1;
    	}
    },
    closeTo: function( obj ) {
	var myPos = this.getPosition();
	var oPos = obj.getPosition();
  	return ( ( Math.abs( myPos.x - oPos.x ) <= 30 ) &&
		 ( Math.abs( myPos.y - oPos.y ) <= 17 ) );
    },
    jump: function() {
    	var pos = this.getPosition();
        this.vy = Player.JUMPING_VELOCITY;
        this.setPosition( new cc.Point( pos.x, pos.y + this.vy ) );
    },
    start: function() {
        this.started = true;
    },
    stop: function() {
	this.started = false;
    },
    fall: function() {
	var pos = this.getPosition();
	var fallAction = cc.MoveTo.create( 0.5, new cc.Point( pos.x, 0 ) );
	this.runAction( fallAction );
    }
});
Player.G = -1;
Player.STARTING_VELOCITY = 25;
Player.JUMPING_VELOCITY = 25;