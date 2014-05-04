var scrollLayer = cc.LayerColor.extend({
	init:function(obj){
        this.setPosition( new cc.Point( 0, 0 ) );
        this.player = obj;
        this.createNormalFloor(new cc.Point( screenWidth / 2, 60 ));
        this.FushFloor();
        this.scheduleUpdate();
        return true;
    },
    createNormalFloor: function(point) {

        this.normalFloor = new NormalFloor(this,point);
        this.addChild(this.normalFloor);
        this.normalFloor.scheduleUpdate();
    },
    randomNormalFloor: function() {
        this.createNormalFloor(new cc.Point(50+Math.random()*(screenWidth-100)
                                    ,scrollLayer.LastFloorHeigh+Math.random()*100));
        scrollLayer.LastFloorHeigh += Math.random()*100;
    },
    FushFloor: function(){
        for(var i = 0; i < 99 ; i++){
            this.randomNormalFloor();
        }
    },
    update: function(dt){
        scrollLayer.FallSpeed = -this.player.vy;
    	if(this.player.onTheMid()){
	    	this.setPosition( new cc.Point( 0, this.getPosition().y) );
            scrollLayer.LastFloorHeigh = scrollLayer.LastFloorHeigh-this.player.vy;
    	}
    	if (scrollLayer.LastFloorHeigh-2000 < this.player.pos.y){
  	    	this.FushFloor();
        }
    },
});
scrollLayer.LastFloorHeigh = 0;
scrollLayer.FallSpeed = 0;