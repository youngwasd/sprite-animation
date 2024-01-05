class Tongue {
    constructor(game) {
        this.game = game;
        this.animator = new Animator(ASSET_MANAGER.getAsset("./tongue.png"), 1.5, 0, 56.3, 55, 7, 0.3);

        this.x = 1005;
        this.y = 678;
        this.speed = 45;
    };

    update() {
        this.x -= this.speed * this.game.clockTick;

        if (this.x <= -100) this.x = 1005;
    };

    draw(ctx) {
        this.animator.drawFrame(this.game.clockTick, ctx, this.x, this.y);
    };
}