var Player = cc.Sprite.extend({
	ctor:function(){
		this._super();
        this.AnimateFalling();
        this.setAnchorPoint(cc.PointMake(0.5,0));

		this.vy = 0;
		this.vx = 0;
        this.high = 0;
        this.animatedMid = false;
        this.animatedFalling = false;
        this.jump();
	},

	update: function( dt ) {
        this.pos = this.getPosition();

        this.accelerate();
        this.swap();
	    if (this.vy > Player.FallLimit)
	    	this.vy +=  Player.G;
        if (this.vy < 0 && !this.animatedFalling)
            this.AnimateFalling();

	    if (this.onTheMid()) {
            this.setPosition( new cc.Point( this.pos.x+this.vx, this.pos.y ) );     
            if(!this.animatedMid)
                this.AnimateOnMid();
        }
	    else
	    	this.setPosition( new cc.Point( this.pos.x+this.vx, this.pos.y+this.vy ));
    },

    accelerate: function(){
        if(this.vx<0)
            this.Left();
        if(this.vx>0)
            this.Right();
    },
    swap: function(){
        if (this.pos.x >800) 
            this.setPosition(0,this.pos.y);
        else if (this.pos.x < 0) 
            this.setPosition(800,this.pos.y);
    },

    onTheMid: function(){
        return(this.pos.y >=350 && this.vy>0)
    },
    jump: function() {
    	if(this.vy > 0) return ;
        this.vy = Player.JUMPING_VELOCITY;
        this.AnimateJump();
    },
    Left: function(){
    	if (this.vx > -Player.VxMax)
        	this.vx--;
    },
    Right: function(){
    	if(this.vx < Player.VxMax)
    		this.vx++;
    },

    AnimateJump: function(){
        var animation = new cc.Animation.create();
        animation.addSpriteFrameWithFile( 'images/Jump0.png' );
        animation.addSpriteFrameWithFile( 'images/Jump0.png' );
        animation.addSpriteFrameWithFile( 'images/Jump1.png' );
        animation.addSpriteFrameWithFile( 'images/Jump2.png' );
        animation.addSpriteFrameWithFile( 'images/Jump3.png' );
        animation.addSpriteFrameWithFile( 'images/Jump2.png' );
        animation.addSpriteFrameWithFile( 'images/Jump3.png' );
        animation.addSpriteFrameWithFile( 'images/Jump2.png' );
        animation.addSpriteFrameWithFile( 'images/Jump3.png' );
        animation.setDelayPerUnit( 0.05 );
        this.runAction(cc.Animate.create( animation ));
    },

    AnimateOnMid: function(){
        var animation = new cc.Animation.create();
        animation.addSpriteFrameWithFile( 'images/OnMid0.png' );
        animation.addSpriteFrameWithFile( 'images/OnMid1.png' );
        animation.addSpriteFrameWithFile( 'images/OnMid2.png' );
        animation.setDelayPerUnit( 0.075 );
        this.runAction( cc.Animate.create( animation ));
        this.animatedMid = true;
        this.animatedFalling = false;
    },
    AnimateFalling: function(){
        var animation = new cc.Animation.create();
        animation.addSpriteFrameWithFile( 'images/Falling0.png' );
        animation.addSpriteFrameWithFile( 'images/Falling1.png' );
        animation.addSpriteFrameWithFile( 'images/Falling2.png' );
        animation.addSpriteFrameWithFile( 'images/Falling3.png' );
        animation.addSpriteFrameWithFile( 'images/Falling4.png' );
        animation.setDelayPerUnit( 0.075 );
        this.runAction(cc.Animate.create( animation ));
        this.animatedFalling = true;
        this.animatedMid = false;
    },
});
Player.G = -0.5;
Player.JUMPING_VELOCITY = 15;
Player.FallLimit = -15;
Player.VxMax = 15;