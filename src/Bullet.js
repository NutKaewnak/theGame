var Bullet = cc.Sprite.extend({
    ctor:function(point,layer){
        this._super();
        this.makeAnimate();
        this.setPosition(point);

        this.layer = layer;
        this.width = 100;
        this.height = 32;

        this.scheduleUpdate();
    },

    makeAnimate: function(){
        var animation = new cc.Animation.create();
        animation.addSpriteFrameWithFile( 'images/Bullet0.png' );
        animation.addSpriteFrameWithFile( 'images/Bullet1.png' );
        animation.addSpriteFrameWithFile( 'images/Bullet2.png' );
        animation.setDelayPerUnit( 0.05 );
        this.runAction(cc.RepeatForever.create(cc.Animate.create( animation )));
    },
    closeTo: function( obj ) {
        this.myPos = this.getPosition();
        var oPos = obj.getPosition();
        return ((Math.abs(this.myPos.x-oPos.x) <= (this.width/2)) && (Math.abs(oPos.y-this.myPos.y) <= (this.height/2)));
    },

    update: function( dt ) {
        this.chkMonster();

        this.pos = this.getPosition();
        this.setPosition(this.pos.x,this.pos.y + 5);

        if (this.pos.y > 2000)
            this.layer.removeChild(this);
    },

    chkMonster:function() {
        for(var i = 0 ; i < this.layer.Monsters.length ; i++){
            if(this.closeTo(this.layer.Monsters[i])){
                this.layer.Monsters[i].Hp -= 20;
                this.layer.removeChild(this);
            }
        }
    }
});