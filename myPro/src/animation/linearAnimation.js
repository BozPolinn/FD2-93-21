export default class LinearAnimation {
    constructor(renderer, sprite, width, height, center) {
        this.renderer = renderer;
        this.sprite = sprite;
        this.linearIndex = 0;
        this.width = width;
        this.height = height;
        this.center = center;
    }

    start() {
        this.timerID = setInterval(this.increaseIndex.bind(this), 1000/24);
    }

    draw(x, y) {
        this.renderer.context.drawImage(this.sprite.get(this.linearIndex), x - this.center * this.width, y, this.width, this.height);
    }

    stop() {
        clearInterval(this.timerID);
    }

    increaseIndex() {
        if (this.linearIndex >= this.sprite.length - 1) {
            this.linearIndex = this.sprite.length - 1;
        } else {
            this.linearIndex += 1;
        }
    }
}