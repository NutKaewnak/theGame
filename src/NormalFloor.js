var NormalFloor = cc.Sprite.extend({
    ctor:function(layer,point){
        this._super();
        this.initWithFile('images/normalFloor.png');
        this.layer = layer;
        this.width = 81+30;
        this.height = 15;
        this.setPosition(point);
        this.myPos = this.getPosition();
    },
    closeTo: function( obj ) {
		var oPos = obj.getPosition();
	  	return ((Math.abs(this.myPos.x-oPos.x) <= (this.width/2)) && (Math.abs(oPos.y-this.myPos.y) <= (this.height/2)));
    },

    update: function( dt ) {
        if (this.layer.player.onTheMid())
        	this.setPosition(this.myPos.x,this.myPos.y-this.layer.player.vy);
        if (this.closeTo( this.layer.player )){
            this.layer.player.jump();    
        }
        if (this.myPos.y < 0)
        	this.layer.removeChild(this);
    },
});