/*
1.Допишіть код, щоб в консолі браузера з'явилися рядки, які написані в коментарях,
оперуючи при цьому змінними х і у.
*/
function printTypes() {
    let x = 1;
    let y = 2;
    let res1 = `${x}${y}`;
    console.log(res1); // "12" 
    console.log(typeof res1); // "string" 

    let res2 = (!(x === y)).toString() + 2;
    console.log(res2); // "true2" 
    console.log(typeof res2); // "string" 

    let res3 = !(x === y);
    console.log(res3); // true 
    console.log(typeof res3); // "boolean" 

    let res4 = x / y.toString;
    console.log(res4); // NaN 
    console.log(typeof res4); // "number"
    console.log("****************************************");
};
printTypes();

/*
2.Користувач вводить число (використовуйте prompt ()). Необхідно перевірити чи є введене число
a) парним додатним;
b) кратним числу 7.
Результат перевірки вивести в консоль.
*/
function verifyNumber() {
    const prmpt = prompt("Enter a number:");
    if (prmpt % 2 == 0) {
        console.log("Парне");
    } else if (prmpt % 7 == 0) {
        console.log("Кратне 7");
    } else {
        console.log("=)");
    }
    console.log("****************************************");
}
verifyNumber();

/*
3. Створіть порожній масив; 
1) У перший елемент масиву запишіть будь-яке число; 
2) У другий елемент масиву запишіть будь-який рядок; 
3) У третій елемент масиву запишіть будь-яке логічне значення; 
4) У четвертий елемент масиву запишіть значення null; 
5) Виведіть на екран число елементів, яке зберігається в масиві; 
6) Запитайте у користувача ввести будь-яке значення і запишіть це значення в п'ятий елемент масиву; 
7) Виведіть на екран п'ятий елемент масиву. 
8) Видаліть 1-ий елемент масиву і виведіть масив на екран. 
*/
function arrFunc() {
    let arr = [];
    arr.push(1);
    arr.push("2");
    arr.push(true);
    arr.push(null);
    console.log(arr.length);
    arr.push(prompt("Enter something: "));
    console.log(arr[4]);
    arr.shift();
    console.log(arr);
    console.log("****************************************");
}
arrFunc();

/*
4. Напишіть програму, яка об’єднує всі наявні елементи масиву в стрічку і розділяє їх символом “*”. 
Початковий масив: 
let cities = ["Rome", "Lviv", "Warsaw"];  
Результуючий масив: 
"Rome*Lviv*Warsaw" 
*/
function changeArr() {
    let cities = ["Rome", "Lviv", "Warsaw"];
    console.log(cities.join("*"));
    console.log("****************************************");
}
changeArr();

/*
5. Використовуючи функцію prompt() задайте користувачу питання про досягнення ним повнолітнього віку.
Результат запишіть в змінну isAdult. В залежності від отриманого значення виведіть відповідне 
повідомлення про статус особи. Наприклад: при виконанні умови вік більше 18 вивести 
“Ви досягли повнолітнього віку”. Якщо вік менше 10 років вивести “Ви ще надто молоді”, 
*/
function isAdult() {
    const prmpt = prompt("How old are you?");
    prmpt >= 18 ?
        console.log("Ви досягли повнолітнього віку") :
        console.log("Ви ще надто молоді");
    console.log("****************************************");
}
isAdult();

/*
6. Користувач вводить три довжини сторін трикутника 
(використовуйте prompt () три рази для введення кожної сторони).
Необхідно  
a) визначити і вивести в консоль площу трикутника  
b) перевірити чи цей трикутник є прямокутним і вивести в консоль результат перевірки. 
Здійснювати перевірку чи введені користувачем значення коректні, 
в іншому випадку вивести 'Incorrect data‘. Результат обчислення площі трикутника виводити 
в консоль з точністю 3 знаки після коми (наприклад:  8.42355465 =>  8.424). 
*/
function triangle() {
    const [a, b, c] = [
        parseInt(prompt("Enter first side")),
        parseInt(prompt("Enter second side")),
        parseInt(prompt("Enter third side")),
    ];
    if (a > 0 && b > 0 && c > 0) {
        let hypotenuse = a;
        let leg1 = b;
        let leg2 = c;

        if (b > hypotenuse || c > hypotenuse) {
            if (b > c) {
                hypotenuse = b;
                leg1 = a;
                leg2 = c;
            } else if (c > b) {
                hypotenuse = c;
                leg1 = a;
                leg2 = b;
            }
        }
        const sumSide = Math.pow(leg1, 2) + Math.pow(leg2, 2);
        const p = (a + b + c) / 2;
        if (p > a && p > b && p > c) {
            const s = Math.sqrt((p * (p - a) * (p - b) * (p - c)));
            console.log("Triangle area: " + s.toFixed(3));
        } else {
            throw new Error("Incorrect data!");
        }

        if (sumSide == Math.pow(hypotenuse, 2)) {
            console.log("Right triangle");
        } else {
            console.log("Not a right triangle");
        }
    } else {
        throw new Error("Incorrect data!")
    }
    console.log("****************************************");
}
triangle();

/*
7. Написати умовну конструкцію, яка в залежності від часу доби виводитиме відповідне привітання. 
Потрібно отримати реальний час доби із системи. Зробити 2 способами через 2 різних умовних оператора.
В діапазоні годин 23-5 – має виводитися привітання “Доброї ночі” 
В діапазоні годин 5-11 – має виводитися привітання “Доброго ранку” 
В діапазоні годин 11-17 – має виводитися привітання “Доброго дня” 
В діапазоні годин 17-23 – має виводитися привітання “Доброго вечора”.
*/
function greetingByIf() {
    const nightTime = [23, 0, 1, 2, 3, 4];
    const morningTime = [5, 6, 7, 8, 9, 10];
    const afternoonTime = [11, 12, 13, 14, 15, 16];
    const eveningTime = [17, 18, 19, 20, 21, 22];
    let time = new Date().getHours();
    if (nightTime.includes(time)) {
        console.log("Доброї ночі");
    } else if (morningTime.includes(time)) {
        console.log("Доброго ранку");
    } else if (afternoonTime.includes(time)) {
        console.log("Добрий день");
    } else if (eveningTime.includes(time)) {
        console.log("Добрий вечір");
    }
}
greetingByIf();

function greetingBySwitch() {
    switch (new Date().getHours()) {
        case 23:
        case 0:
        case 1:
        case 2:
        case 3:
        case 4:
            console.log("Доброї ночі");
            break;
        case 5:
        case 6:
        case 7:
        case 8:
        case 9:
        case 10:
            console.log("Доброго ранку");
            break;
        case 11:
        case 12:
        case 13:
        case 14:
        case 15:
        case 16:
            console.log("Добрий день");
            break;
        case 17:
        case 18:
        case 19:
        case 20:
        case 21:
        case 22:
            console.log("Добрий вечір");
            break;
    }
}
greetingBySwitch();