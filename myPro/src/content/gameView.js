import levelTemplate from "../play/play.html";
import View from "../core/view";
import GameController from "./gameController";
import AnimatedCanvas from "../animation/animatedCanvas";
import Renderer from "../animation/renderer";

export default class GameView extends View {
    constructor(application) {
        super(application, levelTemplate);
        this.timerID = undefined;
    }

    mount() {
        super.mount();
        this.application.root.classList.add('showGetName');

        this.inputName = document.getElementById('userName');
        this.inputName.setAttribute('placeholder', this.application.state.playerName);
        this.getNameBtn = document.getElementById('sendName');

        this.getNameBtn.addEventListener('click', () => {
            this.name = this.inputName.value;
            this.sendName();
            this.application.root.classList.remove('showGetName');
            this.application.root.classList.add('hideGetName');

        }, false);

        document.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                this.name = this.inputName.value;
                this.sendName();
                this.application.root.classList.remove('showGetName');
                this.application.root.classList.add('hideGetName');
            }
            this.removeEnterListener();
        }, false);

        const canvas = document.getElementById('animation');
        this.renderer = new Renderer(canvas);

        window.addEventListener('load', this.renderer.resize, false);
        window.addEventListener('resize', this.renderer.resize, false);

        this.request = 5;

        const levelIndex = this.application.state.game.currentLevelIndex;
        this.right = this.application.state.game.levels[levelIndex].rightCount;
        this.wrong = this.application.state.game.levels[levelIndex].wrongCount;

        this.animationContent = new AnimatedCanvas(this.application, this.renderer, this.request,
            this.right, this.wrong);
        this.animationContent.mount();
        this.animationContent.update();

        this.levelNumber = this.application.root.querySelector('#levelNumber');
        this.questionNumber = this.application.root.querySelector('#questionNumber');
        this.rightCount = this.application.root.querySelector('#rightAns');
        this.wrongCount = this.application.root.querySelector('#wrongAns');
        this.generalCount = this.application.root.querySelector('#general');

        this.hintCont = document.getElementById('hintCont');

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
        window.addEventListener('popstate', this.ifWantReset, false);
        this.hintCont.addEventListener('click', this.showHint.bind(this), false);
    }

    showHint() {
        document.querySelector('.hintText').style.display = 'block';
        this.hintCont.addEventListener('click', this.hideHint.bind(this), false);
    }

    hideHint() {
        this.hintCont.removeEventListener('click', this.showHint.bind(this), false);
        document.querySelector('.hintText').style.display = 'none';
        this.hintCont.addEventListener('click', this.showHint.bind(this), false);
    }

    update() {
        super.update();
        this.animationContent.update();

        const currentLevel = this.application.state.game.getCurrentLevel();
        const levelIndex = this.application.state.game.currentLevelIndex;
        const currentQue = currentLevel.getCurrentQuestion();
        const gameScore = this.application.state.game.getScore();
        const state = this.application.state.game.state;

        if (state === 'fail') {
            this.removeListeners();
            this.timerID = setTimeout(this.failed.bind(this), 3000);
        } else if (state === 'win') {
            this.removeListeners();
            this.timerID = setTimeout(this.won.bind(this), 3000);
        } else {
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
    }

    sendName = () => {
        this.send(GameController, GameController.prototype.sendName, this.name);
    }

    winTemplate = () => {
        this.send(GameController, GameController.prototype.updateWin);
    }

    failTemplate = () => {
        this.send(GameController, GameController.prototype.updateFail);
    }

    won() {
        this.winTemplate();
    }

    failed() {
        this.failTemplate();
    }

    ifWantReset = (event) => {
        if (confirm('При переходе на страницу будут утеряны текущие данные. Подтвердить действие?') === true) {
            this.resetGame();
        } else {
            event.preventDefault()
        }
    };

    resetGame = () => {
        this.send(GameController, GameController.prototype.callReset);
    };

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

    removeEnterListener() {
        document.removeEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                this.name = this.inputName.value;
                this.sendName();
                this.application.root.classList.remove('showGetName');
                this.application.root.classList.add('hideGetName');
            }
        }, false);
    }

    removeListeners() {
        window.removeEventListener('load', this.renderer.resize, false);
        window.removeEventListener('resize', this.renderer.resize, false);
        this.ans1.removeEventListener('click', this.answer1, false);
        this.ans2.removeEventListener('click', this.answer2, false);
        this.ans3.removeEventListener('click', this.answer3, false);
        this.ans4.removeEventListener('click', this.answer4, false);
        this.hintCont.removeEventListener('click', this.showHint.bind(this), false);
        this.hintCont.removeEventListener('click', this.hideHint.bind(this), false);
        this.getNameBtn.removeEventListener('click', () => {
            this.name = this.inputName.value;
            this.sendName();
            this.application.root.classList.remove('showGetName');
            this.application.root.classList.add('hideGetName');
        }, false);
        window.removeEventListener('popstate', this.ifWantReset, false);
    }

    unmount() {
        this.application.root.classList.remove('hideGetName');
        this.application.root.classList.add('showGetName');
        this.animationContent.unmount();
        clearTimeout(this.timerID);
        this.removeListeners();

        super.unmount();
    }
}