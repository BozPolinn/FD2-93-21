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
    //    сохранение score
    }

    updateFail() {
        window.location.hash = "#/fail";
        //    сохранение score
    }

    callReset() {
        this.application.state.game.reset();
    }

    sendName(name) {
        this.application.state.setName(name);
    }
}