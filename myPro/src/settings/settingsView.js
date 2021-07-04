import View from "../core/view";
import settingsPage from "./settings.html";

export default class SettingsView extends View {
    constructor(application) {
        super(application, settingsPage);
    }

    changeSound = () => {
        // call controller
        console.log('zzz');
    };

    mount() {
        super.mount();
        document.querySelector('#soundCheck')
            .addEventListener('click', this.changeSound, false);
    }
    unmount() {
        document.querySelector('#soundCheck')
            .removeEventListener('click', this.changeSound, false);
        super.unmount();
    }
}