var Player = cc.Sprite.extend({
	ctor:function(){
		this._super();
		this.initWithFile('images/dot.png');
		var animation = new cc.Animation.create();
		animation.addSpriteFrameWithFile( 'images/dot1.png' );
		animation.addSpriteFrameWithFile( 'images/dot.png' );
		animation.addSpriteFrameWithFile( 'images/dot3.png' );
		animation.setDelayPerUnit( 0.75 );
		var movingAction = cc.Animate.create( animation );
		this.runAction( movingAction );
		this.vy = 17;
		this.vx = 0;
		this.pos = this.getPosition();
	},

	update: function( dt ) {
		if(this.vx<0){
    		this.vx--;
    	}
    	if(this.vx>0){
    		this.vx++;
    	}

    	if (this.pos.x >800) this.setPosition(0,this.pos.y);
    	else if (this.pos.x < 0) this.setPosition(800,this.pos.y);

	    if (this.vy>Player.FallLimit)
	    	this.vy +=  Player.G;
	    if(this.onTheMid())
	    	this.setPosition( new cc.Point( this.pos.x + this.vx, this.pos.y ) );
	    else
	    	this.setPosition( new cc.Point( this.pos.x + this.vx, this.pos.y + this.vy ) );

    },
    onTheMid: function(){
    	return (this.pos.y >=350 && this.vy>0);
    },
    jump: function() {
    	if(this.vy > 0) return ;
        this.vy = Player.JUMPING_VELOCITY;
        this.setPosition( new cc.Point( this.pos.x, this.pos.y + this.vy ) );
    },
    Left: function(){
    	this.vx--;
    },
    Right: function(){
    	this.vx++;
    }
});
Player.G = -0.5;
Player.JUMPING_VELOCITY = 15;
Player.FallLimit = -15;