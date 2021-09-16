/*
1.Напишіть скріпт всередині HTML-документу, який виводить на екран ваше імя за 
допомогою функції alert().
*/
function printName() {
    const name = "Illia";
    alert(name);
}

/*
2.Напишіть скріпт в зовнішньому файлі, який виводить в консоль ваше прізвище.     
Підключіть створений файл до HTML-документу.
*/
function printSurname() {
    const surname = "Polovynko";
    console.log(surname);
}

/*
3.a) оголосіть дві змінні; 
b) запишіть у змінні будь-які значення; 
c) виведіть на екран значення змінних; 
d) скопіюйте значення однієї змінної в іншу; 
e) виведіть на екран значення змінних. 
*/
function printTwoVariables() {
    let firstVar = 25;
    let secondVar = 20;
    console.log(`First variable: ${firstVar}\nSecond variable: ${secondVar}`);

    secondVar = firstVar;
    console.log(`First variable: ${firstVar}\nSecond variable: ${secondVar}`);
}

/*
4.Створіть об’єкт з 5-ма наступними властивостями: “String”, “Number”, “Boolean”, “Undefined”, “Null”. 
Значення кожної властивості повинно відповідати відповідному примітивному типу даних. 
*/
const obj = {
    "string": "String",
    "number": 24,
    "boolean": true,
    "undefined": undefined,
    "null": null,
};

/*
5.Використовуючи функцію confirm() задайте користувачу питання про досягнення ним повнолітнього віку.
Результат запишіть в змінну isAdult і виведіть в консоль.
*/
function isAdult() {
    const isAdult = confirm("Are you an adult?");
    console.log(isAdult);
}

/*
6. В зовнішньому файлі напишіть скріпт, в якому оголосіть змінні, для збереження таких даних: 
- ваше ім’я 
- ваше прізвище 
- навчальна група 
- ваш рік народження. 
Присвойте змінним відповідні значення.  
Створіть та проініціалізуйте логічну змінну для збереження вашого сімейного стану.  
Визначте тип кожної змінної. 
Виведіть значення змінних в консоль, відповідно до їх типу, в такому порядку: Number, Boolean, String. 
Створіть 2 довільних змінних типу Null і Undefined відповідно. Виведіть їх тип в консоль. 
*/
function printUserInfo() {
    const mainInfo = {
        name: "Illia",
        surname: "Polovynko",
        group: "JavaScript for TA 2021",
        birthday: new Date(1997, 08, 12),
        marriageStatus: false,
        car: null,
        carColor: undefined,
    };

    console.log(`Age: ${new Date().getFullYear() - mainInfo.birthday.getFullYear()}`);
    console.log(`Marriage status: ${mainInfo.marriageStatus}`);
    console.log(`Name: ${mainInfo.name}, Surname: ${mainInfo.surname}, Group: ${mainInfo.group}`);
    console.log(typeof mainInfo.car);
    console.log(typeof mainInfo.carColor);
}

/*
7. За допомогою функції prompt() напишіть скріпт, який послідовно запитує в користувача логін, 
емейл та пароль, і виводить на екран повідомлення із введеними даними. Наприклад “Dear User, your 
email is usermale@gmail.com, your password is qwerty”. 
*/
function greetUser() {
    const [username, email, password] = [
        prompt("Enter your username"),
        prompt("Enter your email"),
        prompt("Enter your password")
    ];
    alert(`Dear ${username}, your email is ${email}, your password is ${password}`);
}

/*
8. Напишіть скріпт, який вираховує кількість секунд в годині, в добі, в місяці,
записує результати в відповідні змінні, і виводить їх значення на екран.
*/
function toSeconds() {
    const hourToSeconds = 60 * 60;
    const dayToSeconds = 24 * 60 * 60;
    const monthToSecond = 30 * 24 * 60 * 60;
    alert(`${hourToSeconds} seconds in 1 hour\n${dayToSeconds} seconds in 1 day\n${monthToSecond} seconds in 1 month`);
}

printSurname();
printTwoVariables();
isAdult();
printUserInfo();
greetUser();
toSeconds();