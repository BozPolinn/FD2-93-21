import View from "../core/view";
import Background from "./background";
import Hero from "./hero";
import Zombie from "./zombie";
import FailState from "./failState";
import WinState from "./winState";

const stepsNumber = 7;

export default class AnimatedCanvas extends View {
    constructor(application, canvas, context, request) {
        super(application, canvas);
        this.canvas = canvas;
        this.context = context;
        this.request = request;
        this.levelIndex = this.application.state.game.currentLevelIndex;
        this.right = this.application.state.game.levels[this.levelIndex].rightCount;
        this.wrong = this.application.state.game.levels[this.levelIndex].wrongCount;
        this.background = new Background(this.canvas, this.context, stepsNumber);
        this.hero = new Hero(this.canvas, this.context, this.request);
        this.zombie = new Zombie(this.canvas, this.context, this.request);
        this.failState = new FailState(this.canvas, this.context);
        this.winState = new WinState(this.canvas, this.context)
        this.frameID = undefined;
    }

    loader = () => {
        this.state = this.application.state.game.getState();
        // console.log(this.state)

        this.background.createBackground();
        this.hero.draw();
        this.zombie.draw();
        if (this.state === 'fail') {
            this.failState.createFail();
            // console.log(this.state)
        //    после проигрыша в новой игре сохраняется состояние fail
        } else if (this.state === 'win') {
            this.winState.createWin();
            console.log('win')
        }
        this.frameID = window.requestAnimationFrame(this.loader);
    };

    mount() {
        this.hero.update(this.right, this.wrong);
        this.zombie.update(this.right, this.wrong);

        this.loader();
    }

    update() {
        this.levelIndex = this.application.state.game.currentLevelIndex;
        this.right = this.application.state.game.levels[this.levelIndex].rightCount;
        this.wrong = this.application.state.game.levels[this.levelIndex].wrongCount;

        this.hero.update(this.right, this.wrong);
        this.zombie.update(this.right, this.wrong);
    }

    unmount() {
        window.cancelAnimationFrame(this.frameID);
        this.hero.currentStop();
        this.zombie.currentStop();
    }
}