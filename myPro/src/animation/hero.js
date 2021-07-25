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

        this.idleWidth = 63;
        this.idleHeight = 75;
        this.idleCenter = 0.5;

        this.walkWidth = 63;
        this.walkHeight = 75;
        this.walkCenter = 0.5;

        this.jumpWidth = 63;
        this.jumpHeight = 75;
        this.jumpCenter = 0.5;

        this.deadWidth = 100;
        this.deadHeight = 80;
        this.deadCenter = 0.75;

        this.idleAnimation = new CyclicAnimation(this.renderer, new idleSprite(), this.idleWidth, this.idleHeight, this.idleCenter);
        this.walkAnimation = new CyclicAnimation(this.renderer, new walkSprite(), this.walkWidth, this.walkHeight, this.walkCenter);
        this.jumpAnimation = new CyclicAnimation(this.renderer, new jumpSprite(), this.jumpWidth, this.jumpHeight, this.jumpCenter);
        this.deadAnimation = new LinearAnimation(this.renderer, new deadSprite(), this.deadWidth, this.deadHeight, this.deadCenter);
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

    currentStart() {
        this.act();
        this.currentAnimation.start();
    }

    currentStop() {
        this.currentAnimation.stop();
    }
    //
    // scale() {
    //     this.initWidth = 800;
    //     this.scale = this.renderer.canvas.width / this.initWidth;
    // }

    draw() {
        this.animationXStep = (this.renderer.canvas.width / this.renderer.rescaler.ratio) / (this.request + 2);
        this.animationY = this.renderer.canvas.height / this.renderer.rescaler.ratio - 75;
        this.currentAnimation.draw(this.animationXStep + this.animationXStep * this.right, this.animationY);
    }
}