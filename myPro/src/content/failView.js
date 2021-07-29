import View from "../core/view";
import failTemplate from "./../play/fail.html";
import GameController from "./gameController";

export default class FailView extends View {
    constructor(application) {
        super(application, failTemplate);
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