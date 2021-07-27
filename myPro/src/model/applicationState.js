import Game from "./game";

export default class ApplicationState {
    constructor() {
        this.game = new Game();

        try {
            const storedSound = JSON.parse(window.localStorage.getItem('soundSettings'));
            if (storedSound !== null) {
                this.settings = storedSound;
            } else {
                this.settings = {sound: true};
            }
        } catch {
            this.settings = {sound: true};
        }
    }

    toggleSound() {
        this.settings.sound = !this.settings.sound;
        window.localStorage.setItem('soundSettings', JSON.stringify(this.settings));
    }
}