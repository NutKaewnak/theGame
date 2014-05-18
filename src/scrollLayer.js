var scrollLayer = cc.LayerColor.extend({
	init:function(obj){
        this.setPosition( new cc.Point( 0, 0 ) );
        this.player = obj;
        this.createNormalFloor(new cc.Point( screenWidth / 2, 60 ));

        this.high = 0;
        this.FushFloor();
        this.scheduleUpdate();
    },

    createNormalFloor: function(point) {

        var normalFloor = new NormalFloor(this,point);
        scrollLayer.LastFloorHeigh = point.y;
        this.addChild(normalFloor);
        normalFloor.scheduleUpdate();
    },
    randomNormalFloor: function() {
        this.hard = 60+Math.min( Math.floor(this.high/100)+Math.random()*50 , 180 );

        this.createNormalFloor(new cc.Point( 50+Math.random()*(screenWidth-100)
                                    ,scrollLayer.LastFloorHeigh+this.hard));
    },
    FushFloor: function(){
        for(var i = 0; i < 49 ; i++){
            this.randomNormalFloor();
        }
    },

    update: function(dt){
        scrollLayer.FallSpeed = -this.player.vy;
    	if(this.player.onTheMid()){
	    	this.setPosition( new cc.Point( 0, this.getPosition().y) );
            scrollLayer.LastFloorHeigh = scrollLayer.LastFloorHeigh-this.player.vy;
            this.high += this.player.vy;
    	}
    	if (scrollLayer.LastFloorHeigh-1000 < this.player.pos.y)
  	    	this.FushFloor();

    },
});
scrollLayer.LastFloorHeigh = 0;
scrollLayer.FallSpeed = 0;