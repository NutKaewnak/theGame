var NormalFloor = cc.Sprite.extend({
    ctor:function(layer){
        this._super();
        this.initWithFile('images/normalFloor.png');
		this.myPos = this.getPosition();
        this.getPlayer(layer);
        this.layer.LastFloorHeigh = this.myPos.y;
    },
    closeTo: function( obj ) {
		var oPos = obj.getPosition();
	  	return (( Math.abs( this.myPos.x - oPos.x ) <= 30 ) && ( Math.abs(oPos.y - this.myPos.y)  <= 15 ));
    },
    update: function( dt ) {
    	this.myPos = this.getPosition();
        if (this.layer.player.onTheMid())
        	this.setPosition(this.myPos.x,this.myPos.y-this.layer.player.vy);
        if ( this.closeTo( this.layer.player ) )
            this.layer.player.jump();
        if (this.myPos.y < 0){
        	this.layer.removeChild(this);
        	console.log("removed");
        }

    },
    getPlayer: function( obj ){
    	this.layer = obj;
    }
});