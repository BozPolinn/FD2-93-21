import View from "../core/view";
import winTemplate from "./../play/win.html";
import GameController from "./gameController";

export default class WinView extends View {
    constructor(application) {
        super(application, winTemplate);
    }

    mount() {
        super.mount();
        document.getElementById('namePlace').innerHTML = this.application.state.playerName;
        document.getElementById('generalCount').innerHTML = this.application.state.game.getScore();
        this.saveResultOfGame();
        this.resetGame();
    }

    saveResultOfGame = () => {
        this.send(GameController, GameController.prototype.callSaveMethod);
    }

    resetGame = () => {
        this.send(GameController, GameController.prototype.callReset);
    }

    unmount() {
        super.unmount();
    }
}