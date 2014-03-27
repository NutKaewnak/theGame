var NormalFloor = cc.Sprite.extend({
    ctor:function(){
        this._super();
        this.initWithFile('images/normalFloor.png');
    },
    closeTo: function( obj ) {
		var myPos = this.getPosition();
		var oPos = obj.getPosition();
	  	return (( Math.abs( myPos.x - oPos.x ) <= 30 ) && ( myPos.y - oPos.y  > -17 ));
    },
    update: function( dt ) {
        if ( this.closeTo( this.player ) ) {
            this.player.jump();
        }
    },
    getPlayer: function( obj ){
    	this.player = obj;
    }
});
