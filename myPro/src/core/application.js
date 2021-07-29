import homePage from "../home/home.html";
import ApplicationState from "../model/applicationState";
import View from "./view";
import SettingsView from "../settings/settingsView";
import GameView from "../content/gameView";
import FailView from "../content/failView";
import WinView from "../content/winView";
import ProgressView from "../progress/progressView";
import Sound from "../play/sound";
import Storage from "../settings/storage";

export default class Application {
    constructor(root) {
        this.state = new ApplicationState();
        this.defaultRoute = "#/";
        this.root = root;
        this.view = null;
        this.routes = {
            "#/" : new View(this, homePage),
            "#/game": new GameView(this),
            "#/settings": new SettingsView(this),
            "#/progress": new ProgressView(this),
            "#/fail": new FailView(this),
            "#/win": new WinView(this)
        };
        this.sound = new Sound(this);
        this.storage = new Storage();
    }

    start() {
        const getPage = () => {
            const hash = window.location.hash;
            if (this.view) {
                this.view.unmount();
            }
            this.view = this.routes[hash];
            this.view.mount();
            this.view.update();
        };

        const onViewEvent = (event) => {
            const {controller, action, parameters} = event.detail;
            action.apply(new controller(this), parameters);
            this.view.update();
        };

        window.addEventListener('hashchange', getPage, false);
        window.addEventListener('viewEvent', onViewEvent, false);

        const currentHash = window.location.hash;
        if (currentHash in this.routes) {
            getPage();
        } else {
            window.location.hash = this.defaultRoute;
        }
    }
}
