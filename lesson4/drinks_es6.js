'use strict';

class HashStorageFunc {
    constructor(key, value) {
        let unitStorage = {};
        this.storage = unitStorage;
    }
    addValue(key,value) {
        this.storage[key] = value;
    }
    getValue(key) {
        return this.storage[key];
    }
    deleteValue(key) {
        if (key in this.storage) {
            delete this.storage[key];
            return true;
        } else {
            return false;
        }
    }
    getKeys() {
        let keyArr = [];
        for (let k in this.storage) {
            keyArr.push(k);
        }
        return keyArr;
    }
}

let DrinkStotage = new HashStorageFunc();

let addUnit = document.querySelector('#addIt');
addUnit.addEventListener('click', fnAdd)

// «ввод информации о напитке» — последовательно спрашивает название напитка, алкогольный он или нет, рецепт
// его приготовления; сохраняет информацию о напитке в хранилище.
function fnAdd() {
    let name = prompt('Введите название напитка');
    let isAlk = confirm('Является ли напиток алкогольным?');
    let recipe = prompt('Введите рецепт напитка');
    let serve = {alko: isAlk, inhr: recipe};
    DrinkStotage.addValue(name, serve);
}

// «получение информации о напитке» — спрашивает название напитка и выдаёт (на страницу, в консоль или в alert)
// либо информацию о нём (по примеру, приведённому ниже), либо сообщение об отсутствии такого напитка в хранилище.
let infoUnit = document.querySelector('#info');
infoUnit.addEventListener('click', fnGetInfo)
function fnGetInfo() {
    function alkDet(param) {
        if (param === true) {
            return 'алкогольный';
        } else {
            return 'безалкогольный';
        }
    }

    let info = prompt('О каком напитке хотите получить информацию?');
    let result = DrinkStotage.getValue(info);
    if (result === undefined) {
        alert('Такого напитка нет в хранилище');
    } else {
        alert('Напиток: ' + info + '\n' + 'Алкогольный: ' + alkDet(result.alko) + '\n' + 'Рецепт: ' + result.inhr);
    }
}

//«удаление информации о напитке» — спрашивает название напитка и удаляет его из хранилища (если он там есть)
// с выдачей соответствующего сообщения в информационное окно.

let delUnit = document.querySelector('#delete');
delUnit.addEventListener('click', fnDelUnit)
function fnDelUnit() {
    let info = prompt('О каком напитке хотите удалить информацию?');
    let result = DrinkStotage.deleteValue(info);
    if (result) {
        alert('Информация удалена');
    } else {
        alert('Такого напитка нет в хранилище');
    }
}

//«перечень всех напитков» — выдаёт в информационное окно перечень всех напитков из хранилища (только названия).

let listUnit = document.querySelector('#list');
listUnit.addEventListener('click', fnGetList)
function fnGetList() {
    alert(DrinkStotage.getKeys());
}

