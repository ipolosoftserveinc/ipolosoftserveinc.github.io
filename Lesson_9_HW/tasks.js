/*
1.
Вихідний код:
let arr = ["Tom", "Sam", "Ray", "Bob"];
let [/ Ваш код /] = arr;
console.log(x); // "Tom"
console.log(y); // "Sam"
console.log(z); // [Bob]
Допишіть код використовуючи деструктурування, щоб в консолі браузера зявилися рядки, які написані в коментарях.
 */
function func1() {
    let arr = ["Tom", "Sam", "Ray", "Bob"];
    let [x,y,,z] = arr;
    console.log(x); // "Tom"
    console.log(y); // "Sam"
    console.log(z); // [Bob]
    console.log('-----------------------------')
}
func1();

/*
2.
Вихідний код:
let data = {
names: ["Sam", "Tom", "Ray", "Bob"],
ages: [20, 24, 22, 26],
};
let / Ваш код / = data;
console.log(name2); // "Tom"
console.log(age2); // 24
console.log(name4); // "Bob"
console.log(age4); // 26
Допишіть код використовуючи деструктурування, щоб в консолі браузера з'явилися рядки, які написані в коментарях.
 */
function func2() {
    let data = {
        names: ["Sam", "Tom", "Ray", "Bob"],
        ages: [20, 24, 22, 26],
    };
    let {names: [,name2,,name4], ages: [,age2,,age4]} = data;
    console.log(name2); // "Tom"
    console.log(age2); // 24
    console.log(name4); // "Bob"
    console.log(age4); // 26
    console.log('-----------------------------')
}
func2();

/*
3. Напишіть функцію mul(), яка приймає будь-яку кількість параметрів різного типу і повертає добуток параметрів типу Number.
Якщо параметри типу Number відсутні, повертає число 0.
ction mul() {
// Ваш код
}
console.log(mul(1, "str", 2, 3, true)); // 6
console.log(mul(null, "str", false, true)); // 0
Не можна використовувати властивість arguments, але в функцію mul() можна додати один параметр.
 */
function mul(...values) {
    let numArr = [];
    let sum;
    for (let value of values) {
        if (typeof value === "number") {
            numArr.push(value);
        }
    }
    numArr.reduce((p, c) => sum = p + c);
    return sum;
}
console.log(mul(1, "str", 2, 3, true));
console.log('-----------------------------');


/*
4.
Вихідний код:
    let server = {
        data: 0,
        convertToString: function (callback) {
            callback((function () {
                return this.data + "";
            }).bind(this));
        }
    };
let client = {
    server: server,
    result: "",
    calc: function (data) {
        this.server.data = data;
        this.server.convertToString(this.notification());
    },
    notification: function () {
        return (function (callback) {
            this.result = callback();
        }).bind(this);
    }
};
client.calc(123);
console.log(client.result); // "123"
g(typeof client.result); // "string"
Змініть код використовуючи стрілочні функції, щоб в коді не використовувалися методи bind().
 */
let server = {
    data: 0,
    convertToString: function (callback) {
        callback(() => this.data + "");
    }
};
let client = {
    server: server,
    result: "",
    calc: function (data) {
        this.server.data = data;
        this.server.convertToString(this.notification());
    },
    notification: function () {
        return ((callback) => this.result = callback());
    }
};
client.calc(123);
console.log(client.result); // "123"
console.log(typeof client.result); // "string"
console.log('-----------------------------');

/*
5. Напишіть функцію mapBuilder (keysArray, valuesArrays), яка приймає два масиви однакової довжини. Використовуючи ці масиви,
    функція повинна створювати об'єкт типу Map, ключами якого є значення з першого масиву,' +
' а значеннями Map - значення з другого масиву. Після цього функція повертає даний об'єкт Map.
    Приклади використання функції:
    let keys = [1, 2, 3, 4];
let values = ["div", "span", "b", "i"];
let map = mapBuilder(keys, values);
console.log(map.size); // 4
console.log(map.get(2)); // "span"
 */
function mapBuilder(keys, values) {
    let map = new Map();
    for (let i in keys) map.set(keys[i], values[i]);
    return map
}
let keys = [1, 2, 3, 4];
let values = ["div", "span", "b", "i"];
let map = mapBuilder(keys, values);
console.log(map.size); // 4
console.log(map.get(2)); // "span"