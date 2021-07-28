import Game from "./game";
import { nameByRace } from "fantasy-name-generator";

export default class ApplicationState {
    constructor() {
        this.game = new Game();

        const playerName = window.localStorage.getItem('playerName');
        if (playerName) {
            this.playerName = playerName;
        } else {
            this.playerName = nameByRace("human");
            window.localStorage.setItem('playerName', this.playerName);
        }

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

    setName(name) {
        if (name) {
            window.localStorage.setItem('playerName', name);
            this.playerName = name;
        }
    }
}