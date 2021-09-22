/*
1. Заданий масив з елементами [2, 3, 4, 5].
За допомогою циклу for знайдіть добуток елементів цього масиву. Також реалізуйте завдання через while.
*/
function arrSum() {
    const arr = [2, 3, 4, 5];
    let sumByFor = 0;
    let sumByWhile = 0;
    let i = 0;
    for (let i in arr) {
        sumByFor += arr[i];
    }

    while (i < arr.length) {
        sumByWhile += arr[i];
        i++;
    }
    console.log(sumByFor);
    console.log(sumByWhile);
}
arrSum();

/*
2. Напишіть JavaScript for цикл, який буде ітеруватися від 0 до 15.
Для кожної ітерації він перевірятиме, чи є поточне число парним чи непарним,
і відображатиме повідомлення на екрані.

Sample Output:
"0 is even"
"1 is odd"
"2 is even"
 */
function evenOdd() {
    for (let i = 0; i <= 15; i++) {
        if (i % 2 === 0) {
            console.log("even");
        } else {
            console.log("odd")
        }
    }
}
// evenOdd();

/*
3. Напишіть функцію randArray(k), яка заповнюватиме масив k випадковими цілими числами.
Випадкові числа генеруються із діапазону 1-500.
 */
function randomArr(n) {
    let arr = [];
    for (let i = 0; i <= n; i++) {
        arr.push(Math.floor(Math.random() * 500));
    }
    console.log(arr);
}
randomArr(5);

/*
4. Напишіть функцію raiseToDegree(a,b), яка повертає результат піднесення числа a до степеня b.
Функція працює тільки з цілими числами. Реалізувати інтерфейс введення чисел a, b з клавіатури.
 */
function raiseToDegree(a, b) {
    return Math.pow(a, b);
}
// console.log(raiseToDegree(
//     parseInt(prompt("Enter the 1st number:")),
//     parseInt(prompt("Enter the 2nd number:")))
// );

/*
5. Реалізуйте функцію – findMin(), яка повинна приймати довільну кількість числових аргументів і повертати той,
 який має найменше значення. Порада: для розв’язку можете скористатися спеціальним масивом arguments.
Sample Output:
findMin(12, 14, 4, -4, 0.2); // => -4
 */
function findMin() {
    let min = arguments[0];
    for (let i = 0; i < arguments.length; i++) {
        if (arguments[i] < min) {
            min = arguments[i];
        }
    }
    console.log(min);
}
findMin(12, 14, 4, -4, 0.2);

/*
6. Напишіть функцію findUnique(arr), яка приймає масив arr і перевіряє на унікальність його елементи.
Якщо всі елементи масиву унікальні (не мають дублів), то функція поверне true, інакше - false.
Sample Output:
findUnique([1, 2, 3, 5, 3]);  // => false
findUnique([1, 2, 3, 5, 11]); // => true
 */
function findUnique(arr) {
    let newArr = [];
    let isUnique = false;
    for (let i of arr) {
        if (newArr.includes(i)) {
            isUnique = false;
            return isUnique;
        } else if (!newArr.includes(i)){
            newArr.push(i);
            isUnique = true;
        }
    }
    return isUnique;
}
console.log(findUnique([1, 2, 3, 5, 3]));
console.log(findUnique([1, 2, 3, 5, 11]));

/*
7. Напишіть функцію, яка повертає останній елемент масиву. Функція може приймати 2 параметра:
1-ий масив, 2-ий числовий параметр, що відповідає кількості 'х' останніх елементів масиву, які треба вивести.
Sample Output:
console.log(lastElem([3, 4, 10, -5]));      // -5
console.log(lastElem([3, 4, 10, -5],2));   // [10, -5]
console.log(lastElem([3, 4, 10, -5],8));   // [3, 4, 10, -5]
 */
function lastElem(arr, x = 1) {
    let newArr = [];
    if (x > arr.length) {
        return arr;
    } else {
        for (let i = x; i > 0; i--) {
            newArr.push(arr[arr.length - i])
        }
    }
    return newArr;
}
console.log(lastElem([3, 4, 10, -5]));
console.log(lastElem([3, 4, 10, -5],2));
console.log(lastElem([3, 4, 10, -5],8));

/*
8. Напишіть функцію, яка приймає рядок як параметр і перетворює першу букву кожного слова рядка
 в верхній регістр.
Input string: 'i love java script'
Output string: 'I Love Java Script
 */
function toUpCase(str) {
    let arr = str.split(' ');
    let firstLetterArr = [];
    let lastLettersArr = [];
    let finalArr = [];
    let newStr = '';
    for (let i in arr) {
        firstLetterArr.push(arr[i][0].toUpperCase());
    }
    for (let i in arr) {
        lastLettersArr.push(arr[i].split(''));
        lastLettersArr[i].shift();
    }
    for (let i in firstLetterArr) {
        let str = firstLetterArr[i] + lastLettersArr[i].join("");
        finalArr.push(str);
        newStr = finalArr.join(" ");
    }
    return newStr;
}
console.log(toUpCase("i love java script"));