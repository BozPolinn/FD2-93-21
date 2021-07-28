import firebase from 'firebase';
import 'firebase/database';

const app = firebase.initializeApp({
    apiKey: "AIzaSyDJVpa0gGDmPm-wT2q64oaLUKo4PawrePk",
    authDomain: "pharmacist-ex.firebaseapp.com",
    projectId: "pharmacist-ex",
    storageBucket: "pharmacist-ex.appspot.com",
    messagingSenderId: "172463345408",
    appId: "1:172463345408:web:a89f6b6abaf674a7d12de5"
});

const database = app.database();

const btn = document.getElementById('send');
btn.addEventListener('click', sendData, false);

function sendData() {
    const name = document.getElementById('name').value;
    const score = parseInt(document.getElementById('score').value, 10);
    console.log(name, score)
    const scoreList = database.ref('scores');
    const newScore = scoreList.push();
    newScore.set({name, score});
}

const getBtn = document.getElementById('get');
getBtn.addEventListener('click', getList, false);
const results = document.getElementById('output');

function getList() {
    const list = database.ref('scores');
    list.once('value', (snapshot) => {
        const array = [];
        snapshot.forEach((unit) => {
            array.push(unit.val());
        })
        results.innerHTML = JSON.stringify(array);
    })
}