export default class CyclicAnimation {
    constructor(renderer, sprite, width, height, center) {
        this.renderer = renderer;
        this.sprite = sprite;
        this.cyclicIndex = 0;
        this.width = width;
        this.height = height;
        this.center = center;
    }

    start() {
        this.timerID = setInterval(this.increaseIndex.bind(this), 1000/24);
    }

    draw(x, y) {
        this.renderer.context.drawImage(this.sprite.get(this.cyclicIndex), x - this.center * this.width, y, this.width, this.height);
    }

    stop() {
        clearInterval(this.timerID);
    }

    increaseIndex() {
        this.cyclicIndex += 1;
        if (this.cyclicIndex === this.sprite.length) {
            this.cyclicIndex = 0;
        }
    }
}