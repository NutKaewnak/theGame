var scrollLayer = cc.LayerColor.extend({
	init:function(Player){
        this.setPosition( new cc.Point( 0, 0 ) );
        this.createNormalFloor(new cc.Point( screenWidth / 2, 60 ));
        this.randomNormalFloor();
        this.player = Player;
        this.scheduleUpdate();
        return true;
    },
    createNormalFloor: function(point) {

        this.normalFloor = new NormalFloor(scrollLayer.player);
        this.addChild(this.normalFloor);
        this.normalFloor.setPosition(point);
        this.normalFloor.scheduleUpdate();
        LastFloorHeigh = point.y;
    },
    randomNormalFloor: function() {
        this.createNormalFloor(new cc.Point( Math.random()*screenWidth,LastFloorHeigh+(Math.random()*300)));
    },
    update: function(dt){
    	if(this.player.onTheMid){
			if (this.vy>Player.FallLimit)
		    	this.vy +=  Player.G;
	    	this.setPosition( new cc.Point( 0, this.pos.y+this.vy ) );
    	}
    	else this.vy = 0 ;

    	if (this.LastFloorHeigh < Player.pos.y+400)
    		randomNormalFloor();
    }
});
scrollLayer.FallLimit = -15;
scrollLayer.G = -0.5;
scrollLayer.vy = 0