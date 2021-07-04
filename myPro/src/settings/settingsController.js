import Controller from "../core/controller";

export default class SettingsController extends Controller {
    constructor(application) {
        super(application);
    }

    toggleSound() {
        this.application.state.toggleSound();
    }
}