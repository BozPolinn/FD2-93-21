export default class FailState {
    constructor(renderer) {
        this.renderer = renderer;
    }

    createFail() {
        this.renderer.context.fillStyle = 'rgba(92,20,255,0.4)';
        this.renderer.context.fillRect(0, 0, this.renderer.canvas.width, this.renderer.canvas.height);

        this.renderer.context.fillStyle = '#d50065';
        this.renderer.context.fillText('fail', this.renderer.canvas.width * 0.5 / 1.5, this.renderer.canvas.height * 0.5 / 1.5);
        this.renderer.context.font = '58px bold Arial';
        this.renderer.context.textAlign = 'center';
        this.renderer.context.textBaseline = 'middle';
    }
}