"use strict";

let HashStorageFunc = function (key, value) {
    let self = this;
    let unitStorage = {};
    self.key = key;
    self.value = value;

    self.addValue = function (key, value) {
        if (!(key in unitStorage)) {
            unitStorage[key] = value;
            return 'Значение добавлено в объект';
        } else {
            return 'Указанное значение добавлено в объект ранее';
        }
    }

    self.getValue = function(key) {
        return unitStorage[key];
        // return (key in unitStorage) ? unitStorage[key] : undefined;
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
console.log(DrinkStorage);
console.log(DrinkStorage.addValue(prompt('Введите новый ключ'), prompt('Укажите значение')));
console.log(DrinkStorage.addValue(prompt('Введите новый ключ'), prompt('Укажите значение')));

console.log(DrinkStorage.getValue(prompt('Введите ключ для проверки')));
console.log(DrinkStorage.getValue(prompt('Введите ключ для проверки')));

console.log(DrinkStorage.getKeys());
console.log(DrinkStorage.deleteValue(prompt('Введите ключ для удаления')));
