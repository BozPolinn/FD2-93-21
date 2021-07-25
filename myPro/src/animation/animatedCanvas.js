import View from "../core/view";
import Background from "./background";
import Hero from "./hero";
import Zombie from "./zombie";
import FailState from "./failState";
import WinState from "./winState";

const stepsNumber = 7;

export default class AnimatedCanvas {
    constructor(application, renderer, request) {
        this.application = application;
        this.renderer = renderer;
        this.request = request;
        this.levelIndex = this.application.state.game.currentLevelIndex;
        this.right = this.application.state.game.levels[this.levelIndex].rightCount;
        this.wrong = this.application.state.game.levels[this.levelIndex].wrongCount;
        this.background = new Background(this.renderer, stepsNumber);
        this.hero = new Hero(this.renderer, this.request);
        this.zombie = new Zombie(this.renderer, this.request);
        this.failState = new FailState(this.renderer);
        this.winState = new WinState(this.renderer);
        this.frameID = undefined;
    }

    loader = () => {
        this.state = this.application.state.game.getState();

        this.background.createBackground();
        this.hero.draw();
        this.zombie.draw();
        if (this.state === 'fail') {
            this.failState.createFail();
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