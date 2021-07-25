import View from "../core/view";
import winTemplate from "./../play/win.html";
import GameController from "./gameController";

export default class WinView extends View {
    constructor(application) {
        super(application, winTemplate);
    }

    mount() {
        super.mount();
        document.getElementById('generalCount').innerHTML = this.application.state.game.getScore();
        this.resetGame();
    }

    resetGame = () => {
        this.send(GameController, GameController.prototype.callReset);
    }

    unmount() {
        super.unmount();
    }
}