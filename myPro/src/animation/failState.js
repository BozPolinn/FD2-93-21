export default class FailState {
    constructor(canvas, context) {
        this.canvas = canvas;
        this.context = context;
    }

    createFail() {
        this.context.fillStyle = 'rgba(92,20,255,0.4)';
        this.context.fillRect(0, 0, this.canvas.width, this.canvas.height);

        this.context.fillStyle = '#d50065';
        this.context.fillText('fail', this.canvas.width * 0.5 / 1.5, this.canvas.height * 0.5 / 1.5);
        this.context.font = '58px bold Arial';
        this.context.textAlign = 'center';
        this.context.textBaseline = 'middle';
    }
}