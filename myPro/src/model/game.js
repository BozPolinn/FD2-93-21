import Level from "./level";
import * as levels from "../content/levelContent";
const request = 5;

export default class Game {
    constructor() {
        const nextLevel = this.nextLevel.bind(this);
        const win = this.win.bind(this);
        const fail = this.fail.bind(this);

        this.levels = [
            new Level(levels.level1, request, nextLevel, fail),
            new Level(levels.level2, request, nextLevel, fail),
            new Level(levels.level3, request, nextLevel, fail),
            new Level(levels.level4, request, nextLevel, fail),
            new Level(levels.level5, request, nextLevel, fail),
            new Level(levels.level6, request, nextLevel, fail),
            new Level(levels.level7, request, win, fail)
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
        //    save generalscore
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
        // не стартует новое состояниe
        // this.levels[this.currentLevelIndex].stateLevel = 'start'
        // this.state = 'start';
        this.state = this.getState()
        this.currentLevelIndex = 0;
        this.generalScore = 0;
        this.previousLevelScore = 0;
        for(let i = 0; i < this.levels.length; i++) {
            this.levels[i].reset();
        }
    }
}