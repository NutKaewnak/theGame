var scrollLayer = cc.LayerColor.extend({
	init:function(obj){
        this.setPosition( new cc.Point( 0, 0 ) );
        scrollLayer.player = obj;
        this.createNormalFloor(new cc.Point( screenWidth / 2, 60 ));
        this.randomNormalFloor();
        
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
        this.createNormalFloor(new cc.Point( 
        	Math.random()*screenWidth,LastFloorHeigh+(Math.random()*300)));
    },
    update: function(dt){
    	if(scrollLayer.player.onTheMid()){
    		console.log("onMid"+scrollLayer.player.pos.y);
	    	this.setPosition( new cc.Point( 0, this.getPosition().y-scrollLayer.player.vy ) );
    	}

    	if (this.LastFloorHeigh < scrollLayer.player.pos.y+400)
    		randomNormalFloor();
    },
});
scrollLayer.FallLimit = -15;
scrollLayer.G = -0.5;
scrollLayer.vy = 0;
scrollLayer.player = null;