import levelTemplate from "../play/play.html";
import View from "../core/view";
import GameController from "./gameController";
import winTemplate from "./../play/win.html";
import failTemplate from "./../play/fail.html";
import Rescale from "./../animation/rescaler";
import AnimatedCanvas from "../animation/animatedCanvas";
import * as levels from "./levelContent";

const request = 5;

export default class GameView extends View {
    constructor(application) {
        super(application, levelTemplate);
        this.timerID = undefined;
    }

    // const timer = setTimeout(, 30000)
    mount() {
        super.mount();

        // canvas found and got context
        this.canvas = document.getElementById('animation');
        const rescaledContext = new Rescale(this.canvas);
        this.context = rescaledContext.rescale();
        this.request = 5;

        const levelIndex = this.application.state.game.currentLevelIndex;
        this.right = this.application.state.game.levels[levelIndex].rightCount;
        this.wrong = this.application.state.game.levels[levelIndex].wrongCount;

        this.animationContent = new AnimatedCanvas(this.application, this.canvas, this.context, this.request,
            this.right, this.wrong);
        this.animationContent.mount();
        this.animationContent.update();


        this.levelNumber = this.application.root.querySelector('#levelNumber');
        this.questionNumber = this.application.root.querySelector('#questionNumber');
        this.rightCount = this.application.root.querySelector('#rightAns');
        this.wrongCount = this.application.root.querySelector('#wrongAns');
        this.generalCount = this.application.root.querySelector('#general');
        this.resetButton = this.application.root.querySelector('#resetBtn');

        this.que = this.application.root.querySelector('#question');
        this.ans1 = this.application.root.querySelector('#ans1');
        this.ans2 = this.application.root.querySelector('#ans2');
        this.ans3 = this.application.root.querySelector('#ans3');
        this.ans4 = this.application.root.querySelector('#ans4');
        this.hidden = this.application.root.querySelector('.hintText');

        this.ans1.addEventListener('click', this.answer1, false);
        this.ans2.addEventListener('click', this.answer2, false);
        this.ans3.addEventListener('click', this.answer3, false);
        this.ans4.addEventListener('click', this.answer4, false);
        this.resetButton.addEventListener('click', this.resetGame, false);
    }

    update() {
        super.update();
        this.animationContent.update();

        const currentLevel = this.application.state.game.getCurrentLevel();
        const levelIndex = this.application.state.game.currentLevelIndex;
        const currentQue = currentLevel.getCurrentQuestion();
        const gameScore = this.application.state.game.updateScore();
        const state = this.application.state.game.state;

        if (state === 'fail') {
            console.log(state)
            this.timerID = setTimeout(this.failed.bind(this), 3000);
        } else if (state === 'win') {
            this.timerID = setTimeout(this.won.bind(this), 3000);
        }

        this.levelNumber.innerHTML = levelIndex + 1;
        this.questionNumber.innerHTML = this.application.state.game.levels[levelIndex].currentQuestion + 1;

        this.rightCount.innerHTML = currentLevel.rightCount;
        this.wrongCount.innerHTML = currentLevel.wrongCount + 1;
        this.generalCount.innerHTML = gameScore;

        this.que.innerHTML = currentQue.question;
        this.ans1.innerHTML = currentQue.answers[0].text;
        this.ans2.innerHTML = currentQue.answers[1].text;
        this.ans3.innerHTML = currentQue.answers[2].text;
        this.ans4.innerHTML = currentQue.answers[3].text;
        this.hidden.innerHTML = currentQue.help;
    }

    won() {
        const gameScore = this.application.state.game.updateScore();
        this.application.root.innerHTML = winTemplate;
        document.getElementById('generalCount').innerHTML = gameScore;
        this.resetGame();
    //    вызывать reset в контроллере -> модели
    }

    failed() {
        const gameScore = this.application.state.game.updateScore();
        this.application.root.innerHTML = failTemplate;
        document.getElementById('generalCount').innerHTML = gameScore;
        this.resetGame();
    }

    resetGame = () => {
        this.application.state.game.reset();
    }

    answer1 = () => {
        this.send(GameController, GameController.prototype.answer, 0);
    };

    answer2 = () => {
        this.send(GameController, GameController.prototype.answer, 1);
    };

    answer3 = () => {
        this.send(GameController, GameController.prototype.answer, 2);
    };

    answer4 = () => {
        this.send(GameController, GameController.prototype.answer, 3);
    };

    unmount() {
        this.animationContent.unmount();

        this.ans1.removeEventListener('click', this.answer1, false);
        this.ans2.removeEventListener('click', this.answer2, false);
        this.ans3.removeEventListener('click', this.answer3, false);
        this.ans4.removeEventListener('click', this.answer4, false);

        super.unmount();
    }
}