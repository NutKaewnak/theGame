var Player = cc.Sprite.extend({
	ctor:function(){
		this._super();
		this.initWithFile('images/dot.png');
		var animation = new cc.Animation.create();
		animation.addSpriteFrameWithFile( 'images/dot1.png' );
		animation.addSpriteFrameWithFile( 'images/dot.png' );
		animation.addSpriteFrameWithFile( 'images/dot3.png' );
		animation.setDelayPerUnit( 0.75 );
		this.runAction( cc.Animate.create( animation ) );

		this.vy = 17;
		this.vx = 0;
        this.high = 0;
	},

	update: function( dt ) {
        this.pos = this.getPosition();

        this.accelerate();
        this.swap();

	    if (this.vy>Player.FallLimit)
	    	this.vy +=  Player.G;

	    if(this.onTheMid()){
            this.setPosition( new cc.Point( this.pos.x+this.vx, this.pos.y ) );
        }
	    else{
	    	this.setPosition( new cc.Point( this.pos.x+this.vx, this.pos.y+this.vy ));
        }
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
    },
    Left: function(){
    	if (this.vx > -Player.VxMax)
        	this.vx--;
    },
    Right: function(){
    	if(this.vx < Player.VxMax)
    		this.vx++;
    }

});
Player.G = -0.5;
Player.JUMPING_VELOCITY = 15;
Player.FallLimit = -15;
Player.VxMax = 15;