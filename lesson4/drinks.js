"use strict";

let HashStorageFunc = function () {
    let self = this;
    let unitStorage = {};

    self.addValue = function (key, value) {
        unitStorage[key] = value;
    }

    self.getValue = function(key) {
        return unitStorage[key];
    }

    self.deleteValue = function (key) {
        if (key in unitStorage) {
            delete unitStorage[key];
            return true;
        } else {
            return false;
        }
    }

    self.getKeys = () => {
        let keys = [];
        for (let k in unitStorage) {
            keys.push(k);
        }
        return keys;
    }
}

const DrinkStorage = new HashStorageFunc();

const addUnit = document.querySelector('#addIt');
addUnit.addEventListener('click', clickAdd);
function clickAdd() {
    let name = prompt('Введите название напитка');
    let isAlk = confirm('Является ли напиток алкогольным?');
    let contains = prompt('Укажите рецепт напитка');
    let value = {alcoholity: isAlk, recipe: contains};
    DrinkStorage.addValue(name, value);
}

const getUnit = document.querySelector('#info');
getUnit.addEventListener('click', getInfo);
function getInfo() {
    let control = prompt('Введите название напитка для проверки наличия в базе');
    let fact = DrinkStorage.getValue(control);

    function alkDetermine(isAlk) {
        if (isAlk) {
            return 'алкогольный';
        } else {
            return 'безалкогольный';
        }
    }
    if (fact === undefined) {
        alert('Нет информации о напитке');
    } else {
        alert('Название: ' + control + '\n' + 'Категория: ' + alkDetermine(fact.alcoholity) + '\n' + 'Состав: ' + fact.recipe);
    }
}

const delUnit = document.querySelector('#delete');
delUnit.addEventListener('click', deleteInfo);
function deleteInfo() {
    let unit = prompt('Информацию о каком напитке Вы хотели бы удалить?');
    let result = DrinkStorage.deleteValue(unit);
    if (result) {
        alert('Информация удалена!');
    } else {
        alert('Информация о напитке в базе отсутствует!');
    }
}

const unitList = document.querySelector('#list');
unitList.addEventListener('click', showKeys);
function showKeys() {
    let result = DrinkStorage.getKeys();
    if (result.length === 0) {
        alert('В хранилище нет значений');
    } else {
        alert(result);
    }
}
