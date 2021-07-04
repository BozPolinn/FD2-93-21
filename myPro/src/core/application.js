import homePage from "../home/home.html";
import ApplicationState from "../model/applicationState";
import View from "./view";
import SettingsView from "../settings/settingsView";

export default class Application {
    constructor(root) {
        this.state = new ApplicationState();
        this.defaultRoute = "#/";
        this.root = root;
        this.view = null;
        this.routes = {
            "#/" : new View(this, homePage),
            "#/game": undefined,
            "#/settings": new SettingsView(this),
            "#/progress": undefined,
            "#/share": undefined
        };
    }

    start() {
        const getPage = () => {
            const hash = window.location.hash;
            if (this.view) {
                this.view.unmount();
            }
            this.view = this.routes[hash];
            this.view.mount();
        };

        window.addEventListener('hashchange', getPage, false);

        const currentHash = window.location.hash;
        if (currentHash in this.routes) {
            getPage();
        } else {
            window.location.hash = this.defaultRoute;
        }
    }
}
