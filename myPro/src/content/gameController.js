import Controller from "../core/controller";

export default class GameController extends Controller {
    constructor(application) {
        super(application);
        this.sound = this.application.sound;
    }

    answer(index) {
        const level = this.application.state.game.getCurrentLevel();
        const question = level.getCurrentQuestion();
        if (question.answers[index].state) {
            level.right();
            this.sound.right();
        } else {
            level.wrong();
            this.sound.wrong();
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

    callSaveMethod() {
        const name = this.application.state.playerName;
        const score = this.application.state.game.getScore();
        this.application.storage.saveScore(name, score);
    }

    sendName(name) {
        this.application.state.setName(name);
    }
}