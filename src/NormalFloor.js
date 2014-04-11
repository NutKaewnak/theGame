var NormalFloor = cc.Sprite.extend({
	tor:function(){
        this._super();
        this.initWithFile('images/normalFloor.png');
    },
    ctor:function(player){
        this._super();
        this.initWithFile('images/normalFloor.png');
        this.getPlayer(player);
    },
    closeTo: function( obj ) {
		var myPos = this.getPosition();
		var oPos = obj.getPosition();
	  	return (( Math.abs( myPos.x - oPos.x ) <= 30 ) && ( Math.abs(oPos.y - myPos.y)  <= 17 ));
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
