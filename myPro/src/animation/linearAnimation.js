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

    getScale() {
        this.scaleX = (this.renderer.canvas.width / this.renderer.rescaler.ratio) / 800;
        this.scaleY = (this.renderer.canvas.height / this.renderer.rescaler.ratio) / 150;
    }

    draw(x, y) {
        this.getScale();
        this.renderer.context.drawImage(this.sprite.get(this.linearIndex), x - this.center * this.width * this.scaleX,
            y, this.width * this.scaleX, this.height * this.scaleY);
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