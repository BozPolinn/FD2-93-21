// Создать проект ANKETA. Спросить у пользователя:
// + фамилию, имя, отчество РАЗДЕЛЬНО (оператором prompt)
// + возраст в годах (оператором prompt)
// + пол (оператором confirm, например, "ваш пол - мужской?")
// + и вывести оператором alert анкету пользователя по примеру:

// + ваше ФИО: Иванов Иван Иванович
// + ваш возраст в годах: 20
// + ваш возраст в днях: 7300
// + через 5 лет вам будет: 25
// + ваш пол: мужской
// + вы на пенсии: нет
// + Должен быть контроль корректности вводимых пользователем данных (например, фамилия не должна быть пустой, возраст должен быть корректной цифрой и т.д.).
// + Оператор alert в коде должен использоваться ровно один раз.

var nameClient;
// проверка циклом while
var nameType;
    do {
        nameClient = prompt('Введите Ваше имя', 'Иван');
        nameType = Boolean(nameClient);
    } while (nameType === false || nameClient.trim() === ''); 
// проверка циклом do while
var patronymicNameClient = prompt('Введите Ваше отчество', 'Иванович');
    nameType = Boolean(patronymicNameClient);
    while (nameType === false || patronymicNameClient.trim() === '') {
        nameType = Boolean(patronymicNameClient = prompt('Введите Ваше отчество', 'Иванович'));
    }

var secondNameClient;
    do {
        secondNameClient = prompt('Введите Вашу фамилию', 'Иванов');
        nameType = Boolean(secondNameClient);
    } while (nameType === false || secondNameClient.trim() === ''); 

var age = parseInt(prompt('Введите Ваш возраст', '25'), 10);
 while (isNaN(age) || age < 6 || age > 80) {
    age = parseInt(prompt('Введите корректный возраст'), 10);
 }

var gender = genderDetermine();
var pensio = pensioDetermine();

function genderDetermine() {
    if (confirm('Вы являетесь мужчиной? Если да, нажмите ОК. Если нет, нажмите ОТМЕНА')) {
        return 'мужской';
    } else {
        return 'женский';
    }
};

function pensioDetermine() {
    if (gender) {
        if (age >= 60) {
            return 'Вы на пенсии';
        }
        else {
            return 'Нет, на вас еще пахать можно!';
        }
    } else {
        if (age >= 55) {
            return 'Вы на пенсии';
        }
        else {
            return 'Нет, на вас еще пахать можно!';
        }
    }
}

alert(
    'Ваше ФИО: ' + nameClient + ' ' + patronymicNameClient + ' ' + secondNameClient +
    '\nВаш возраст (в годах): ' + age +
    '\nВаш возраст (в днях): ' + age*365 +
    '\nЧерез 5 лет Вам будет (в годах): ' + (age + 5) +
    '\nВаш пол: ' + gender +
    '\nВы на пенсии? ' + pensio 
);