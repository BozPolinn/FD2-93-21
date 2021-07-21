export default class WinState {
    constructor(canvas, context) {
        this.canvas = canvas;
        this.context = context;
    }

    createWin() {
        this.context.fillStyle = 'rgba(247,19,255,0.4)';
        this.context.fillRect(0, 0, this.canvas.width, this.canvas.height);

        this.context.fillStyle = '#3a0ca3';
        this.context.fillText('win', this.canvas.width * 0.5 / 1.5, this.canvas.height * 0.5 / 1.5);
        this.context.font = '58px bold Arial';
        this.context.textAlign = 'center';
        this.context.textBaseline = 'middle';
    }
}