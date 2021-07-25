export default class CanvasRescale {
    constructor(canvas) {
        this.canvas = canvas;
    }

    rescale(desiredWidth, desiredHeight) {
        this.context = this.canvas.getContext('2d');
        let devicePixelRatio = window.devicePixelRatio || 1;
        let backingStoreRatio = this.context.webkitBackingStorePixelRatio ||
            this.context.mozBackingStorePixelRatio ||
            this.context.msBackingStorePixelRatio ||
            this.context.oBackingStorePixelRatio ||
            this.context.backingStorePixelRatio || 1;
        this.ratio = devicePixelRatio / backingStoreRatio;
        if (devicePixelRatio !== backingStoreRatio) {
            this.canvas.width = desiredWidth * this.ratio;
            this.canvas.height = desiredHeight * this.ratio;
            this.canvas.style.width = desiredWidth + 'px';
            this.canvas.style.height = desiredHeight + 'px';
            this.context.scale(this.ratio, this.ratio);
        }
        return this.context;
    }
}