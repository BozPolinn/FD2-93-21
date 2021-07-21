import Controller from "../core/controller";
import GameView from "./gameView";
import Application from "../core/application";
import failTemplate from "../play/fail.html";
import winTemplate from "../play/win.html";

export default class GameController extends Controller {
    constructor(application) {
        super(application);
    }

    answer(index) {
        const level = this.application.state.game.getCurrentLevel();
        const question = level.getCurrentQuestion();
        if (question.answers[index].state) {
            level.right();
        } else {
            level.wrong();
        }
    }

    updateWin() {
        window.location.hash = "#/win";
    }

    updateFail() {
        window.location.hash = "#/fail";
    }

    callReset() {
        this.application.state.game.reset();
    }
}