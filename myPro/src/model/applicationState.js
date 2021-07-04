export default class ApplicationState {
    constructor() {
        this.settings = {
            sound: true
        };
    }

    toggleSound() {
        this.settings.sound = !this.settings.sound;
    }
}