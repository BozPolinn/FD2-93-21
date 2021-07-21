export default class CanvasRescale {
    constructor(canvas) {
        this.canvas = canvas;
        this.context = this.canvas.getContext('2d');
    }

    rescale() {
        let devicePixelRatio = window.devicePixelRatio || 1;
        let backingStoreRatio = this.context.webkitBackingStorePixelRatio ||
            this.context.mozBackingStorePixelRatio ||
            this.context.msBackingStorePixelRatio ||
            this.context.oBackingStorePixelRatio ||
            this.context.backingStorePixelRatio || 1;
        let ratio = devicePixelRatio / backingStoreRatio;
        if (devicePixelRatio !== backingStoreRatio) {
            let oldWidth = this.canvas.width;
            let oldHeight = this.canvas.height;
            this.canvas.width = oldWidth * ratio;
            this.canvas.height = oldHeight * ratio;
            this.canvas.style.width = oldWidth + 'px';
            this.canvas.style.height = oldHeight + 'px';
            this.context.scale(ratio, ratio);
        }
        return this.context;
    }
}