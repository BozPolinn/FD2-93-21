import Game from "./game";

export default class ApplicationState {
    constructor() {
        this.settings = {
            sound: true
        };
        this.game = new Game();
    }

    toggleSound() {
        this.settings.sound = !this.settings.sound;
    }
}