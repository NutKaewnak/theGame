var scrollLayer = cc.LayerColor.extend({
	init:function(obj){
        this.setPosition( new cc.Point( 0, 0 ) );
        scrollLayer.player = obj;
        this.LastFloorHeigh = 0;
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
        this.LastFloorHeigh = point.y;
    },
    randomNormalFloor: function() {
        this.createNormalFloor(new cc.Point( 
        	Math.random()*screenWidth,LastFloorHeigh+(Math.random()*300)));
    },
    update: function(dt){
    	if(scrollLayer.player.onTheMid()){
	    	this.setPosition( new cc.Point( 0, this.getPosition().y+scrollLayer.player.G) );
	    	this.LastFloorHeigh += scrollLayer.player.G;
    	}

    	if ((this.LastFloorHeigh < scrollLayer.player.pos.y+400) && (Math.random()*100>90))
    		this.randomNormalFloor();
    },
});
scrollLayer.FallLimit = -15;
scrollLayer.G = -0.5;
scrollLayer.vy = 0;
scrollLayer.player = null;