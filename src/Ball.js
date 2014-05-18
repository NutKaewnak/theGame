var Ball = cc.Sprite.extend({
    ctor:function(layer){
        this._super();
        this.makeAnimate();

        this.setPosition(Math.random()*screenWidth,1080);
        this.width = 64;
        this.height = 64;
        this.layer = layer;
        this.Hp = 60;
        this.pos = this.getPosition();

        this.scheduleUpdate();
    },

    makeAnimate: function(){
        var animation = new cc.Animation.create();
        animation.addSpriteFrameWithFile( 'images/Ball0.png' );
        animation.addSpriteFrameWithFile( 'images/Ball1.png' );
        animation.addSpriteFrameWithFile( 'images/Ball2.png' );
        animation.addSpriteFrameWithFile( 'images/Ball3.png' );
        animation.setDelayPerUnit( 0.1 );
        this.runAction(cc.RepeatForever.create(cc.Animate.create( animation )));
    },closeTo: function( obj ) {
        this.myPos = this.getPosition();
        var oPos = obj.getPosition();
        return ((Math.abs(this.myPos.x-oPos.x) <= (this.width/2)) && (Math.abs(oPos.y-this.myPos.y) <= (this.height/2)));
    },

    update: function( dt ) {
        this.pos = this.getPosition();

        if (this.Hp < 0){
            this.layer.player.high += 500;
            this.die();
        }
        if (this.pos.y < 0 ){
            this.die();
        }
        if (this.closeTo(this.layer.player)){
            this.layer.removeChild(this.layer.player);
            this.layer.GameOver();
        }
        if (this.layer.player.onTheMid())
            this.setPosition(this.pos.x,this.pos.y-this.layer.player.vy);
    },

    die: function(){
        this.layer.removeChild(this);
        this.layer.Monsters.pop(this);
        console.log(this.layer.Monsters.length);
    }
});