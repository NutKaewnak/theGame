var NormalFloor = cc.Sprite.extend({
    ctor:function(player){
        this._super();
        this.initWithFile('images/normalFloor.png');
		this.myPos = this.getPosition();
        this.getPlayer(player);
    },
    closeTo: function( obj ) {
		var oPos = obj.getPosition();
	  	return (( Math.abs( this.myPos.x - oPos.x ) <= 30 ) && ( Math.abs(oPos.y - this.myPos.y)  <= 15 ));
    },
    update: function( dt ) {
        if (this.player.onTheMid())
        	this.setPosition(this.myPos.x,this.myPos.y-this.player.vy);
        if ( this.closeTo( this.player ) )
            this.player.jump();

    },
    getPlayer: function( obj ){
    	this.player = obj;
    }
});