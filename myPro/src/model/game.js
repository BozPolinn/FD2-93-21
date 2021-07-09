import Level from "./level";
import * as levels from "../content/levelContent";

export default class Game {
    constructor() {
        const nextLevel = this.nextLevel.bind(this);
        const win = this.win.bind(this);
        const fail = this.fail.bind(this);

        this.levels = [
            new Level(levels.level1, 5, nextLevel, fail),
            new Level(levels.level2, 5, nextLevel, fail),
            new Level(levels.level3, 5, nextLevel, fail),
            new Level(levels.level4, 5, nextLevel, fail),
            new Level(levels.level5, 5, nextLevel, fail),
            new Level(levels.level6, 5, nextLevel, fail),
            new Level(levels.level7, 5, win, fail)
        ];
        this.currentLevelIndex = 0;
        this.previousLevelScore = 0;
        this.generalScore = 0;
        this.state = this.getState();
    }

    win() {
        this.state = this.getState();
        //    save generalscore

    }

    fail() {
        this.state = this.getState();
        // нужен пересчет generalscore
        //    save generalscore
        //    сброс настроек после окончания игры
    }

    updateScore() {
        this.generalScore = this.levels[this.currentLevelIndex].levelscore + this.previousLevelScore;
        return this.generalScore;
    }

    getState() {
        return this.levels[this.currentLevelIndex].stateLevel;
    }

    nextLevel() {
        const previousScore = this.levels[this.currentLevelIndex].levelscore;
        this.previousLevelScore += previousScore;
        this.currentLevelIndex += 1;
    }

    getCurrentLevel() {
        return this.levels[this.currentLevelIndex];
    }

    reset() {
        this.state = 'start';
        this.currentLevelIndex = 0;
        this.levels[this.currentLevelIndex].rightCount = 0;
        this.levels[this.currentLevelIndex].wrongCount = -1;
        this.generalScore = 0;
        this.previousLevelScore = 0;
        this.levels[this.currentLevelIndex].currentQuestion = 0;
        this.levels[this.currentLevelIndex].levelscore = 0;
    }

    // нужно обработать ситуацию, когда человек завершил игру и начинает заново
}