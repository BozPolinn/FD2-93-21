import CyclicAnimation from "./cyclicAnimation";
import LinearAnimation from "./linearAnimation";
import zombieIdleSprite from "./zombie/spriteZombieIdle";
import zombieAttackSprite from "./zombie/spriteZombieAtack";
import zombieDeadSprite from "./zombie/spriteDeadZombie";

export default class Zombie {
    constructor(renderer, request, right, wrong) {
        this.renderer = renderer;

        this.request = request;

        this.zIdleWidth = 68;
        this.zIdleHeight = 75;
        this.zIdleCenter = 0.5;

        this.attackWidth = 63;
        this.attackHeight = 75;
        this.attackCenter = 0.5;

        this.zDeadWidth = 100;
        this.zDeadHeight = 80;
        this.zDeadCenter = 0.5;

        this.idleAnimation = new CyclicAnimation(this.renderer, new zombieIdleSprite(), this.zIdleWidth, this.zIdleHeight, this.zIdleCenter);
        this.attackAnimation = new CyclicAnimation(this.renderer, new zombieAttackSprite(), this.attackWidth, this.attackHeight, this.attackCenter);
        this.deadAnimation = new LinearAnimation(this.renderer, new zombieDeadSprite(), this.zDeadWidth, this.zDeadHeight, this.zDeadCenter);
        this.act();
    }

    update(right, wrong) {
        this.right = right;
        this.wrong = wrong;
        this.currentStop();
        this.currentStart();
    }

    act() {
        if (this.right - 1 === this.wrong) {
            this.currentAnimation = this.attackAnimation;
        } else if (this.right === this.request) {
            this.attackCenter = 0.2;
            this.currentAnimation = this.deadAnimation;
        } else {
            this.currentAnimation = this.idleAnimation;
        }
    }

    currentStart() {
        this.act();
        this.currentAnimation.start();
    }

    currentStop() {
        this.currentAnimation.stop();
    }

    draw() {
        this.animationXStep = (this.renderer.canvas.width / this.renderer.rescaler.ratio) / (this.request + 2);
        this.animationY = this.renderer.canvas.height / this.renderer.rescaler.ratio - 75;
        this.currentAnimation.draw(this.animationXStep + this.animationXStep * this.wrong, this.animationY);
    }
}