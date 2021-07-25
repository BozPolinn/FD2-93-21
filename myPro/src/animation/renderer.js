import Rescale from "./../animation/rescaler";

export default class Renderer {
    constructor(canvas) {
        this.canvas = canvas;
        this.resizeCanvas();
        this.rescaler = new Rescale(this.canvas);
        this.context = this.rescaler.rescale(this.width, this.height);
    }

    resize = () => {
        this.resizeCanvas();
        this.context = this.rescaler.rescale(this.width, this.height);
    };

    resizeCanvas() {
        if ((window.innerWidth <= 1040 && window.innerWidth > 950) || (window.innerWidth <= 880 && window.innerWidth > 750)) {
            this.width = 700;
            this.height = 131;
        } else if ((window.innerWidth <= 950 && window.innerWidth > 880) || (window.innerWidth <= 750 && window.innerWidth > 650)) {
            this.width = 600;
            this.height = 113;
        } else if (window.innerWidth <= 650 && window.innerWidth > 550) {
            this.width = 500;
            this.height = 94;
        } else if (window.innerWidth <= 550 && window.innerWidth > 450) {
            this.width = 400;
            this.height = 75;
        } else if (window.innerWidth <= 450 && window.innerWidth > 350) {
            this.width = 300;
            this.height = 56;
        } else if (window.innerWidth <= 350) {
            this.width = 250;
            this.height = 47;
        } else {
            this.width = 800;
            this.height = 150;
        }
    }
}