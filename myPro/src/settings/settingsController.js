import Controller from "../core/controller";
import {on, off} from "../utils/soundLabelManage";

export default class SettingsController extends Controller {
    constructor(application) {
        super(application);
    }

    toggleSound() {
        this.application.state.toggleSound();
    }

    changeSound() {
        this.toggleSound();
        console.log(this.application.state.settings.sound)
        if (this.application.state.settings.sound) {
            off();
        } else {
            on();
        }
    }
}