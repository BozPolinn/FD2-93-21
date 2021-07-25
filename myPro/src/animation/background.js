import back from "../../images/back.jpg";

const img = new Image(225, 150);
img.src = back;

export default class Background {
    constructor(renderer, stepsNumber) {
        this.renderer = renderer;
        this.stepsNumber = stepsNumber;
    }

    createBackground() {
        const width = this.renderer.canvas.width / this.renderer.rescaler.ratio;
        const height = this.renderer.canvas.height / this.renderer.rescaler.ratio;
        const scale = height / 150;

        this.renderer.context.save();
        this.renderer.context.scale(scale, scale);
        this.renderer.context.fillStyle = this.renderer.context.createPattern(img, 'repeat-x');
        this.renderer.context.fillRect(0, 0, width / scale, height / scale);
        this.renderer.context.restore();

        const startCoordinateX = width / this.stepsNumber;
        const startCoordinateY = height;

        for (let i = 0; i < this.stepsNumber; i++) {
            this.renderer.context.strokeStyle = '#a100f2';
            this.renderer.context.lineWidth = 5;
            this.renderer.context.beginPath();
            this.renderer.context.moveTo((i * startCoordinateX), startCoordinateY);
            this.renderer.context.lineTo(((i + 1) * startCoordinateX), startCoordinateY);
            this.renderer.context.stroke();

            if (i === this.stepsNumber - 1) {
                continue;
            }

            this.renderer.context.fillStyle = '#a100f2';
            this.renderer.context.beginPath();
            this.renderer.context.arc(((i + 1) * startCoordinateX), startCoordinateY, 5, 0, Math.PI*2, false)
            this.renderer.context.fill();
        }
    }
}