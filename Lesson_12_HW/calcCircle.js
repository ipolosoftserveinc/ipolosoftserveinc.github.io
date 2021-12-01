/**
 * 3. Створити файл calcCircle.js в якому міститься 2 функції для розрахунку довжини кола getCircleLength(radius) і площі
 * кола getCircleArea(radius). Виконати експорт функцій.
 * Створити файл calcCircle.test.js в якому потрібно протестувати задані функції.
 * 1) Протестувати функцію getCircleLength() з аргументом 22, перевірити твержєення, що довжина кола дорівнює 138.2 при
 * розрахунку з точністю до 1-го знаку після коми.
 * 2) Протестувати функцію getCircleArea() з аргументом 9, перевірити твержєення, що приблизна площа кола дорівнює 254.47.
 * 3) Протествувати обидві функції без переданих аргументів.
 *
 * function getCircleLength(radius) {
 *      return 2 * Math.PI * radius;
 * }
 * function getCircleArea(radius) {
 *      return Math.PI * radius ** 2;
 * }
*/
function getCircleLength(radius) {
    return 2 * Math.PI * radius;
}

function getCircleArea(radius) {
    return Math.PI * radius ** 2;
}

module.exports = {getCircleArea, getCircleLength}