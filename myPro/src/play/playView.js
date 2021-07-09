import View from "../core/view";
import playField from "../play/play.html";
import backGround from "../../images/back.jpg";

export default class PlayView extends View {
    constructor(application) {
        super(application, playField);
    }

    createBackground() {
        const element = document.querySelector('#animation');
        const context = element.getContext('2d');

        const back = new Image(225, 150);
        back.src = backGround;
        back.onload = drawStart;

        const stepsNumber = 12;
        function createBackLine(stepsNumber) {
            const steps = stepsNumber;
            const startCoordinateX = element.width / steps;
            const startCoordinateY = element.height * 0.75;

            for (let i = 0; i < steps; i++) {
                context.strokeStyle = '#a100f2';
                context.lineWidth = 5;
                context.beginPath();
                context.moveTo((i * startCoordinateX), startCoordinateY);
                context.lineTo(((i + 1) * startCoordinateX), startCoordinateY);
                context.stroke();

                if (i === steps - 1) {
                    continue;
                }

                context.fillStyle = '#a100f2';
                context.beginPath();
                context.arc(((i + 1) * startCoordinateX), startCoordinateY, 5, 0, Math.PI*2, false)
                context.fill();
            }

        }

        function drawStart() {
            context.fillStyle = context.createPattern(back, 'repeat-x');
            context.fillRect(0, 0, element.width, element.height);
            createBackLine(stepsNumber);
        }
    }

    mount() {
        super.mount();
        this.createBackground();
    }
    unmount() {
        super.unmount();
    }
}