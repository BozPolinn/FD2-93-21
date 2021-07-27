import rightSound from "./../sounds/right.mp3";
import wrongSound from "./../sounds/wrong.mp3";

export default class Sound {
    constructor(application) {
        this.application = application;
        this.rightSound = new Audio(rightSound);
        this.wrongSound = new Audio(wrongSound);
        this.currentSound = undefined;
    }

    right() {
        this.currentSound = this.rightSound;
        this.play();
    }

    wrong() {
        this.currentSound = this.wrongSound;
        this.play();
    }

    play() {
        if (this.application.state.settings.sound) {
            this.currentSound.play();
            this.currentSound.currentTime = 0;
        }
    }
}