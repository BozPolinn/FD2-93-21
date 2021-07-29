import {addMenu, removeMenu} from "../utils/showHideMenu";
import {preventDoubleClick, removeStopDoubleClick} from "../utils/clickEvent";

export default class View {
    constructor(application, content) {
        this.application = application;
        this.content = content;
    }

    mount() {
        this.application.root.innerHTML = this.content;
        addMenu();
        preventDoubleClick();
    }

    update() {

    }

    unmount() {
        removeStopDoubleClick();
        removeMenu();
        this.application.root.innerHTML = '';
    }

    send(controller, action, ...parameters) {
        const event = new CustomEvent('viewEvent', {
            detail: {controller, action, parameters}
        });
        window.dispatchEvent(event);
    }
}