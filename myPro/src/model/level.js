export default class Level {
    constructor(questions, request, onWin, onFail) {
        this.questions = questions;
        this.currentQuestion = 0;
        this.rightCount = 0;
        this.wrongCount = -1;
        this.requested = request;
        this.onWin = onWin;
        this.onFail = onFail;
        this.stateLevel = 'start';
        this.levelscore = 0;
    }

    right() {
        this.rightCount += 1;
        this.levelscore = this.rightCount - (this.wrongCount + 1);
        this.checkState();
    }

    wrong() {
        this.wrongCount += 1;
        this.levelscore = this.rightCount - (this.wrongCount + 1);
        this.checkState();
    }

    checkState() {
        if (this.rightCount === this.requested) {
            this.win();
        } else if (this.rightCount === this.wrongCount) {
            this.fail();
        }
        this.currentQuestion++;
    }

    fail() {
        this.stateLevel = 'fail';
        this.onFail();
    }

    win() {
        this.stateLevel = 'win';
        this.onWin();
    }

    getCurrentQuestion() {
        return this.questions[this.currentQuestion];
    }

    reset() {
        this.stateLevel = 'start';
        this.levelscore = 0;
        this.currentQuestion = 0;
        this.rightCount = 0;
        this.wrongCount = -1;
    }
}