/*
1. Реалізуйте функцію calcRectangleArea(), яка приймає 2 параметри ширина прямокутника width
і висота прямокутника height і обраховує його площу.
Передбачити припинення виконання програми і генерацію винятку у випадку,
 якщо функції передано не числові параметри.
Напишіть код, який використовує цю функцію та обробляє можливі виняткові ситуації.
 */
function calcRectangleArea(width, height) {
    let s = 0;
    if (typeof width == "number" && typeof height == "number") {
        s = width * height
    } else {
        throw new Error("Invalid data!")
    }
    return s;
}
console.log(calcRectangleArea(3, 2));

/*
2. Напишіть функцію checkAge(), яка пропонуватиме юзеру ввести свій вік
 і генерувати в модальному вікні помилки у випадку, коли:
- юзер ввів порожню стрічку (наприклад “The field is empty! Please enter your age”),
- нечислове значення
- вік юзера менше 14 років.
В іншому разі юзер отримує доступ до перегляду фільму.
В блокові catch передбачити виведення назви і опису помилки.
 */
function checkAge() {
    let age = parseInt(prompt("Enter your age:"));
    if (!age) {
        throw new Error("Incorrect Data. Please enter a number.");
    } else if (age < 14) {
        throw new Error("User age is less then 14 y.o.");
    } else {
        console.log("Welcome! Enjoy your movie!")
    }
}
try {
    checkAge();
} catch (e) {
    console.log(e.name);
    console.log(e.message);
}


/*
3. Реалізуйте функцію showUser(id), яка приймає параметром користувацьке id і повертає об’єкт,
який містить значення переданої id. Також функція викидає помилку у разі якщо введено від’ємне id.
Реалізуйте функцію showUsers(ids), яка приймає параметром масив користувацьких айді ids,
перевіряє з використанням функції showUser() кожен елемент масиву ids на коректність,
в разі виключної ситуації виводить повідомлення про помилку.
Функція showUsers(ids) повертає масив об’єктів, де значеннями ключів є коректні елементи ids.
Приклад роботи програми:
showUsers([7, -12, 44, 22]);
Error: ID must not be negative: -12
[ {id: 7}, {id: 44}, {id: 22} ]
 */
function showUser(id) {
    if (id < 0) {
        throw new Error("ID must not be negative: " + id);
    } else {
        return {id: id}
    }
}

function showUsers(ids) {
    try {
        return ids.map((e) => showUser(e));
    } catch (_) {
        console.log(_.message);
    }
}
console.log(showUsers([7, -12, 44, 22]));
console.log(showUsers([7, 12, 44, 22]));