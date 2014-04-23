var scrollLayer = cc.LayerColor.extend({
	init:function(obj){
        this.setPosition( new cc.Point( 0, 0 ) );
        this.player = obj;
        this.LastFloorHeigh = 0;
        this.createNormalFloor(new cc.Point( screenWidth / 2, 60 ));
        this.randomNormalFloor();
        
        this.scheduleUpdate();
        return true;
    },
    createNormalFloor: function(point) {

        this.normalFloor = new NormalFloor(this);
        this.addChild(this.normalFloor);
        this.normalFloor.setPosition(point);
        this.normalFloor.scheduleUpdate();
    },
    randomNormalFloor: function() {
        this.createNormalFloor(new cc.Point( 
        	Math.random()*screenWidth,LastFloorHeigh+100+(Math.random()*300)));
    },
    update: function(dt){
    	if(this.player.onTheMid()){
	    	this.setPosition( new cc.Point( 0, this.getPosition().y+this.player.G) );
    	}

    	if ((this.LastFloorHeigh-400 < this.player.pos.y)&&(Math.random()*100>98))
  	    		this.randomNormalFloor();
    },
});