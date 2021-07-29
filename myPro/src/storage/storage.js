import firebase from "firebase/app";
import 'firebase/database';
import {appConfig} from "./storageConfig";

export default class Storage {
    constructor() {
        const app = firebase.initializeApp(appConfig);
        this.database = app.database();
    }

    getList() {
        return this.database.ref('scoreList').orderByChild('score').once('value')
            .then((snapshot) => {
                const dataArray = [];
                snapshot.forEach((unit) => {
                    dataArray.push(unit.val());
                })
                return dataArray;
            }, () => new Error('Ошибка загрузки данных'));
    }

    saveScore(name, score) {
        const data = this.database.ref('scoreList');
        const newNote = data.push();
        newNote.set({
            name: name, score: score
        });
    }
}