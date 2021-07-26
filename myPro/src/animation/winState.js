export default class WinState {
    constructor(renderer) {
        this.renderer = renderer;
    }

    createWin() {
        const width = this.renderer.canvas.width / this.renderer.rescaler.ratio;
        const height = this.renderer.canvas.height / this.renderer.rescaler.ratio;
        const scale = height / 150;

        this.renderer.context.save();
        this.renderer.context.scale(scale, scale);
        this.renderer.context.fillStyle = 'rgba(247,19,255,0.4)';
        this.renderer.context.fillRect(0, 0, width / scale, height / scale);
        this.renderer.context.restore();

        const currentCanvasWidth = document.getElementById('animation').offsetWidth;
        const currentCanvasHeight = document.getElementById('animation').offsetHeight;
        this.renderer.context.fillStyle = '#3a0ca3';
        this.renderer.context.fillText('win', currentCanvasWidth * 0.5, currentCanvasHeight * 0.5);
        this.renderer.context.font = '60px bold Arial';
        this.renderer.context.textAlign = 'center';
        this.renderer.context.textBaseline = 'middle';
    }
}