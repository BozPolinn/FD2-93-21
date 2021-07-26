import CyclicAnimation from "./cyclicAnimation";
import LinearAnimation from "./linearAnimation";
import idleSprite from "./hero/spriteIdleHero";
import walkSprite from "./hero/spriteWalkHero";
import jumpSprite from "./hero/spriteRunningHero";
import deadSprite from "./hero/spriteDeadHero";

export default class Hero {
    constructor(renderer, request) {
        this.renderer = renderer;
        this.request = request;
        this.correctHeight = 35;

        this.idle = {width : 63, height: 75, center : 0.5};
        this.walk = {width : 63, height: 75, center : 0.5};
        this.jump = {width : 63, height: 75, center : 0.5};
        this.dead = {width : 93, height: 75, center : 0.75};

        this.idleAnimation = new CyclicAnimation(this.renderer, new idleSprite(), this.idle.width, this.idle.height, this.idle.center);
        this.walkAnimation = new CyclicAnimation(this.renderer, new walkSprite(), this.walk.width, this.walk.height, this.walk.center);
        this.jumpAnimation = new CyclicAnimation(this.renderer, new jumpSprite(), this.jump.width, this.jump.height, this.jump.center);
        this.deadAnimation = new LinearAnimation(this.renderer, new deadSprite(), this.dead.width, this.dead.height, this.dead.center);
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
            this.currentAnimation = this.walkAnimation;
        } else if (this.right === this.wrong) {
            this.currentAnimation = this.deadAnimation;
        } else if (this.right === this.request) {
            this.currentAnimation = this.jumpAnimation;
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
        this.animationY = (this.renderer.canvas.height / this.renderer.rescaler.ratio) - this.currentAnimation.height * this.scaleY - this.correctHeight * this.scaleY;
        this.currentAnimation.draw(this.animationXStep + this.animationXStep * this.right, this.animationY);
    }
}