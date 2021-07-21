import CyclicAnimation from "./cyclicAnimation";
import LinearAnimation from "./linearAnimation";
import idleSprite from "./hero/spriteIdleHero";
import walkSprite from "./hero/spriteWalkHero";
import jumpSprite from "./hero/spriteRunningHero";
import deadSprite from "./hero/spriteDeadHero";

export default class Hero {
    constructor(canvas, context, request) {
        this.canvas = canvas;
        this.context = context;

        this.request = request;
        this.animationXStep = this.canvas.width / ((this.request + 2) * 1.5);
        this.animationY = this.canvas.height * 0.25 / 1.5;

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

        this.idleAnimation = new CyclicAnimation(this.context, new idleSprite(), this.idleWidth, this.idleHeight, this.idleCenter);
        this.walkAnimation = new CyclicAnimation(this.context, new walkSprite(), this.walkWidth, this.walkHeight, this.walkCenter);
        this.jumpAnimation = new CyclicAnimation(this.context, new jumpSprite(), this.jumpWidth, this.jumpHeight, this.jumpCenter);
        this.deadAnimation = new LinearAnimation(this.context, new deadSprite(), this.deadWidth, this.deadHeight, this.deadCenter);
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

    draw() {
        this.currentAnimation.draw(this.animationXStep + this.animationXStep * this.right, this.animationY);
    }
}