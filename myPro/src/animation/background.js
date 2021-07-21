import back from "../../images/back.jpg";

const img = new Image(225, 150);
img.src = back;

export default class Background {
    constructor(canvas, context, stepsNumber) {
        this.context = context;
        this.canvas = canvas;
        this.stepsNumber = stepsNumber;
    }

    createBackground() {
        const element = this.canvas;
        function createBackLine(canvas, context, stepsNumber) {
            const startCoordinateX = element.width / stepsNumber / 1.5;
            const startCoordinateY = element.height * 0.75 / 1.5;

            for (let i = 0; i < stepsNumber; i++) {
                context.strokeStyle = '#a100f2';
                context.lineWidth = 5;
                context.beginPath();
                context.moveTo((i * startCoordinateX), startCoordinateY);
                context.lineTo(((i + 1) * startCoordinateX), startCoordinateY);
                context.stroke();

                if (i === stepsNumber - 1) {
                    continue;
                }

                context.fillStyle = '#a100f2';
                context.beginPath();
                context.arc(((i + 1) * startCoordinateX), startCoordinateY, 5, 0, Math.PI*2, false)
                context.fill();
            }
        }

        this.context.fillStyle = this.context.createPattern(img, 'repeat-x');
        this.context.fillRect(0, 0, this.canvas.width, this.canvas.height);
        createBackLine(this.canvas, this.context, this.stepsNumber)
    }
}