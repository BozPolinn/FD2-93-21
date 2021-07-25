import View from "../core/view";
import failTemplate from "./../play/fail.html";
import GameController from "./gameController";

export default class FailView extends View {
    constructor(application) {
        super(application, failTemplate);
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