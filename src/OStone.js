var OStone = cc.Sprite.extend({
    ctor:function(player,theta){
        this._super();
        this.makeAnimate();

        this.Theta = theta;
        this.player = player;
        this.pos = this.getPosition();
        this.scheduleUpdate();
    },

    makeAnimate: function(){
        var animation = new cc.Animation.create();
        animation.addSpriteFrameWithFile( 'images/OStone0.png' );
        animation.addSpriteFrameWithFile( 'images/OStone1.png' );
        animation.addSpriteFrameWithFile( 'images/OStone2.png' );
        animation.addSpriteFrameWithFile( 'images/OStone3.png' );
        animation.setDelayPerUnit( 0.04 );
        this.runAction(cc.RepeatForever.create(cc.Animate.create( animation )));
    },

    update: function( dt ) {
        this.setPosition( Math.cos(this.Theta)*100, 
                            Math.sin(this.Theta)*100);
        this.Theta += Math.PI / 30;
        this.Theta %= 2*Math.PI;
        
        this.pos = this.getPosition();
    },
});