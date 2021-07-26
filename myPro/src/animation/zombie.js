import CyclicAnimation from "./cyclicAnimation";
import LinearAnimation from "./linearAnimation";
import zombieIdleSprite from "./zombie/spriteZombieIdle";
import zombieAttackSprite from "./zombie/spriteZombieAtack";
import zombieDeadSprite from "./zombie/spriteDeadZombie";

export default class Zombie {
    constructor(renderer, request) {
        this.renderer = renderer;
        this.request = request;
        this.correctHeight = 35;

        this.idle = {width : 68, height: 75, center : 0.5};
        this.attack = {width : 63, height: 75, center : 0.5};
        this.dead = {width : 93, height: 75, center : 0.5};

        this.idleAnimation = new CyclicAnimation(this.renderer, new zombieIdleSprite(), this.idle.width, this.idle.height, this.idle.center);
        this.attackAnimation = new CyclicAnimation(this.renderer, new zombieAttackSprite(), this.attack.width, this.attack.height, this.attack.center);
        this.deadAnimation = new LinearAnimation(this.renderer, new zombieDeadSprite(), this.dead.width, this.dead.height, this.dead.center);
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
            this.currentAnimation = this.deadAnimation;
        } else {
            this.currentAnimation = this.idleAnimation;
        }
    }

    getScaleY() {
        this.scaleY = (this.renderer.canvas.height / this.renderer.rescaler.ratio) / 150;
    }

    currentStart() {
        this.act();
        this.currentAnimation.start();
    }

    currentStop() {
        this.currentAnimation.stop();
    }

    draw() {
        this.getScaleY();
        this.animationXStep = (this.renderer.canvas.width / this.renderer.rescaler.ratio) / (this.request + 2);
        this.animationY = this.renderer.canvas.height / this.renderer.rescaler.ratio - this.currentAnimation.height * this.scaleY - this.correctHeight * this.scaleY;
        this.currentAnimation.draw(this.animationXStep + this.animationXStep * this.wrong, this.animationY);
    }
}