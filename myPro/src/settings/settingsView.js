import View from "../core/view";
import settingsPage from "./settings.html";
import SettingsController from "./settingsController";

export default class SettingsView extends View {
    constructor(application) {
        super(application, settingsPage);
    }

    changeSound = () => {
        this.send(SettingsController, SettingsController.prototype.changeSound);
    };

    mount() {
        super.mount();
        const label = document.querySelector('#soundCheck');
        const state = this.application.state.settings.sound;
        if (state) {
            label.classList.add('checked');
        } else {
            label.classList.add('unChecked');
        }
        label.addEventListener('click', this.changeSound, false);
    }
    unmount() {
        document.querySelector('#soundCheck')
            .removeEventListener('click', this.changeSound, false);
        super.unmount();
    }
}